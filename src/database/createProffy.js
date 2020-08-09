module.exports = async function(db, {proffyValue, classValue, classScheduleValues}) {
    // aguarda uma promessa dentro do () para ir para próx linha
    // o await evita executar vários then()
    // para usar o await é necessário o async na frente da função

    // inserir dados na table de proffys. Crases na linha de baixo é para poder quebrar a linha e continuar o código
    const insertedProffy = await db.run(` 
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)
    
    const proffy_id = insertedProffy.lastID 
    
    // inserir dados na tabela classes
    const insertedClass = await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id
            ) VALUES (
                "${classValue.subject}",
                "${classValue.cost}",
                "${proffy_id}"
            )
    `)       
    
    const class_id = insertedClass.lastID
    
    // inserir dados na tabela class_schedule
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => {   // map vai retornar um novo array
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `)
    })   

    // aqui vou executar todos os db.run() das class_schedules
    await Promise.all(insertedAllClassScheduleValues)
}
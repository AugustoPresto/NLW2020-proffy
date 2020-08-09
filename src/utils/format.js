const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]


function getSubject(subjectNumber){
    const position = +subjectNumber - 1 // O + na frente garante que o tipo de dado é number
    return subjects[position]
}

function convertHoursToMinutes(time){
    const [hour, minutes] = time.split(":") // desestruturação: criei duas variáveis a partir do time.spli()
    return Number((hour * 60) + minutes) // Number() garante que será type número
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}
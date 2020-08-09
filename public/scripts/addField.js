// procurar o botão
// quando clicar nele
// executar uma ação
// ação: duplicar os campos
// colocar na página (onde?)

document.querySelector("#add-time").addEventListener('click', cloneField)

function cloneField() {
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)  // função cloneNode() returna uma cópia do elemento. Com o true, ele copia todos os filhos
    
    const fields = newFieldContainer.querySelectorAll('input') // seleciona os campos
    
    fields.forEach(function (field){   // limpa os campos
        field.value = "";
    })

    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}
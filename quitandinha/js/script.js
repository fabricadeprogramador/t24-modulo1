let cesta = []
let quantidadeCesta

function adicionarCesta(produto) {
    cesta.push(produto)
    localStorage.setItem("cesta", JSON.stringify(cesta))
    carregarCesta()
}

function carregarCesta() {
    cesta = JSON.parse(localStorage.getItem("cesta"))
    quantidadeCesta = cesta.length
    // atualizar número na tela
    // pegar o span
    let quantidadeSpan = document.getElementById("quantidadeCesta")
    if (quantidadeSpan) document.getElementById("quantidadeCesta").innerHTML = quantidadeCesta
    // atualizar valor do span
}

function listarCesta() {
    carregarCesta()
    let listaCesta = document.getElementById("listaCesta")
    listaCesta.innerHTML = ""
    for (let i = 0; i < cesta.length; i++) {
        // let div = document.createElement('div')
        // div.innerHTML = cesta[i]
        // listaCesta.appendChild(div)
        var template = document.createElement('template')
        template.innerHTML = 
        `<div class="item-cesta" id="item-${i}">
            <span>
                ${cesta[i]}
            </span>
            <button onclick="removerItemCesta(${i})" class="btn remover" title="Remover item da cesta">
                Remover
            </button>
        </div>`
        listaCesta.appendChild(template.content.childNodes[0])
    }
}

function removerItemCesta(index) {
    cesta.splice(index, 1);
    localStorage.setItem("cesta", JSON.stringify(cesta))
    document.getElementById(`item-${index}`).style.animation = "remove-item-cesta 1s forwards";
    setTimeout(listarCesta, 1000)
}
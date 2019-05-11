let cesta = []

function adicionarCesta(produto) {
    cesta.push(produto)

    alert("Sua cesta contém: " + cesta.toString())
    localStorage.setItem("cesta", JSON.stringify(cesta))
    carregarCesta()
}

function carregarCesta() {
    cesta = JSON.parse(localStorage.getItem("cesta"))
    // atualizar número na tela
    // pegar o span
    // atualizar valor do span
    if (document.getElementById("quantidadeCesta") != null) {
        document.getElementById("quantidadeCesta").innerHTML = cesta.length
    }
}

function listarCesta() {
    carregarCesta()
    let lista = document.getElementById("listaCesta")
    for (let i = 0; i < cesta.length; i++) {

        let template = document.createElement("template")
        template.innerHTML = 
        `<div class="item-cesta" id="item-${i}">
            <span>${cesta[i]}</span>
            <button class="btn remover" onclick="remover(${i})">Remover</button>
        </div>
        `

        lista.appendChild(template.content.childNodes[0])
    }
}

function remover(index) {
    document.getElementById(`item-${index}`).style.animation = "remove-cesta 2s"
}
let cesta = []
let quantidadeCesta

function adicionarCesta(produto) {
    cesta.push(produto)

    alert("Sua cesta contém: " + cesta.toString())
    localStorage.setItem("cesta", JSON.stringify(cesta))
    carregarCesta()
}

function carregarCesta() {
    cesta = JSON.parse(localStorage.getItem("cesta"))
    quantidadeCesta = cesta.length
    // atualizar número na tela
    // pegar o span
    // atualizar valor do span
    if (document.getElementById("quantidadeCesta") != null) {
        document.getElementById("quantidadeCesta").innerHTML = quantidadeCesta
    }
}

function listarCesta() {
    carregarCesta()
    for (let i = 0; i < cesta.length; i++) {
        alert(cesta[i])
    }
}
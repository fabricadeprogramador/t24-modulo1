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
    document.getElementById("quantidadeCesta").innerHTML = quantidadeCesta
    // atualizar valor do span
}
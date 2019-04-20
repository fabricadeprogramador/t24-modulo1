let cesta = []

function adicionarCesta(produto) {
    cesta.push(produto)

    alert("Sua cesta contém: " + cesta.toString())
    localStorage.setItem("cesta", JSON.stringify(cesta))
}

function carregarCesta() {
    cesta = JSON.parse(localStorage.getItem("cesta"))
}
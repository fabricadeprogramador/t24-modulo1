function verificar() {
    let tagSelecionada = document.querySelector("input[type=radio]:checked")
    let selecionado
    
    if(tagSelecionada == null){
        selecionado = null
    }else {
        selecionado = tagSelecionada.value
    }

    if (selecionado == "vermelho") {
        alert("Pare! Agora...")
    } else if (selecionado == "amarelo") {
        alert("Run!")
    } else if (selecionado == "verde") {
        alert("Vai tranquilo!")
    } else {
        alert("Só pode estar quebrado!")
    }
}
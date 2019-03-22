
function verificar() {
    let selecionado = document.querySelector("input[type=radio]:checked")
    let sinal = ""

    if(selecionado != null){
        sinal = selecionado.value
    }
    
    if(sinal == "vermelho") {
        alert("Pare!")
    } else if(sinal == "amarelo"){
        alert("Corre!")
    } else if(sinal == "verde"){
        alert("De boa!")
    } else {
        alert("Aí fica difícil! Seleciona algo aí")
    }
}
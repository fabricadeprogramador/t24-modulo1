
function verificar() {
    let selecionado = document.querySelector("input[type=radio]:checked")
    let sinal = ""

    if(selecionado != null){
        sinal = selecionado.value
    }
    
    if(sinal == "vermelho") {
        alert("Pare!")
    } 

    if(sinal == "amarelo"){
        alert("Corre!")
    }

    if(sinal == "verde"){
        alert("De boa!")
    }

    if(sinal == ""){
        alert("Aí fica difícil! Seleciona algo aí")
    }
}
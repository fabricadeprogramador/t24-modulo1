
function verificar() {
    
    let selecionado = document.querySelector("input[type=radio]:checked")
    let sinal = ""

    if(selecionado != null){
        sinal = selecionado.value
    }
    
    if(sinal == "vermelho") {
        alert("Pare!")
        document.getElementById("semaforo").src = "vermelho.svg"
    } else if(sinal == "amarelo"){
        alert("Corre!")
        document.getElementById("semaforo").src = "amarelo.svg"
    } else if(sinal == "verde"){
        alert("De boa!")
        document.getElementById("semaforo").src = "verde.svg"
    } else {
        alert("Aí fica difícil! Seleciona algo aí")
    }
}
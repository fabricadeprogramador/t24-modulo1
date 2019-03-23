function verificar() {

    let selecionado = document.querySelector("input[type=radio]:checked")
    let sinal = ""

    if (selecionado != null) {
        sinal = selecionado.value
    }

    switch (sinal) {
        case "vermelho":
            alert("Pare!")
            document.getElementById("semaforo").src = "vermelho.svg"
            break
        case "amarelo":
            alert("Corre!")
            document.getElementById("semaforo").src = "amarelo.svg"
            break
        case "verde":
            alert("De boa!")
            document.getElementById("semaforo").src = "verde.svg"
            break
        default:
            alert("Aí fica difícil! Seleciona algo aí!")
            document.getElementById("semaforo").src = "apagado.svg"
            break
    }
    
}
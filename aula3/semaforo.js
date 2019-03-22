
function verificar() {
    let sinal = document.querySelector("input[type=radio]:checked").value
    
    if(sinal == "vermelho") {
        alert("Pare!")
    } 

    if(sinal == "amarelo"){
        alert("Corre!")
    }

    if(sinal == "verde"){
        alert("De boa!")
    }
}
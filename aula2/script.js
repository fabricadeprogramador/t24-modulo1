function logar(){
    
    //Pega os dados do formulário
    let usuario = document.getElementById("usuario").value
    let senha = document.getElementById("usuario").value

    // Exibe alerta
    exibirAlerta("Seu nome é: " + usuario + " e senha: " + senha)
}

function exibirAlerta(texto) {
    let span = document.querySelector(".alerta span")
    span.innerHTML = texto
    let alerta = document.querySelector(".alerta")
    alerta.style.display = "block"
}

function fecharAlerta() {
    let alerta = document.querySelector(".alerta")
    alerta.style.display = "none"
}
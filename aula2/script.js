function logar(){
    
    //Pega os dados do formulário
    let usuario = document.getElementById("usuario").value
    let senha = document.getElementById("usuario").value

    // Exibe alerta
    if(usuario != "" && senha != "") {
        exibirAlerta("sucesso", "Seu nome é: " + usuario + " e senha: " + senha)
    }else {
        exibirAlerta("erro", "Login ou senha inválido")
    }
}

function exibirAlerta(classe, texto) {
    let span = document.querySelector(".alerta span")
    span.innerHTML = texto
    let alerta = document.querySelector(".alerta")
    alerta.classList.remove("erro")
    alerta.classList.remove("sucesso")
    alerta.classList.add(classe)
    alerta.style.display = "block"
}

function fecharAlerta() {
    let alerta = document.querySelector(".alerta")
    alerta.style.display = "none"
}
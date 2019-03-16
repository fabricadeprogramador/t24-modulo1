function calcular(){

    let peso = Number.parseFloat(document.getElementById("peso").value)
    let altura = Number.parseFloat(document.getElementById("altura").value)
    let imc = peso/(altura*altura)

    if(imc < 18.5) {
        alert("Você está abaixo do peso!")
    } else if(imc >= 18.5 && imc <= 24.9){
        alert("Você está no peso ideal!")
    } else if(imc >= 25 && imc <= 29.9){
        alert("Você está levemente acima do peso!")
    } else if(imc >= 30 && imc <= 34.9){
        alert("Você está com obesidade grau I!")
    } else if(imc >= 35 && imc <= 39.9){
        alert("Você está com obesidade grau II (grave)!")
    } else if(imc >= 40){
        alert("Você está com obesidade grau III (mórbida)!")
    }
        
}
let peso = Number(prompt("Informe o peso:"))
let altura = Number(prompt("Informe a altura:"))

let result = peso / (altura * altura)

console.log("Seu IMC é de " + result + ".")

document.getElementById("resultado").innerHTML = "Seu IMC é de " + (result.toFixed(2)) + "."
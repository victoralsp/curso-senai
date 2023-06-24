let numero1 = Number(prompt("Informe o primeiro número: "))
let numero2 = Number(prompt("Informe o segundo número: "))
let numero3 = Number(prompt("Informe o terceiro número: "))
let numero4 = Number(prompt("Informe o quarto número: "))

let result = numero1 + numero2 + numero3 + numero4

console.log("O resultado é " + result + ".")


document.getElementById("resultado").innerHTML = "O resultado é " + result + "."
// Variáveis

let nota1 = parseFloat(prompt("Informe a primeira nota:"))
let nota2 = parseFloat(prompt("Informe a segunda nota:"))

let media = (nota1 + nota2) / 2

console.log("A média calculada é " + media + ".")

document.getElementById("resultado").innerHTML = "A média calculada é " + media + "."


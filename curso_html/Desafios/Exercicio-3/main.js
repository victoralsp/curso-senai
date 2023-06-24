let baseMaior = parseFloat(prompt("Informe a base maior:"))
let baseMenor = parseFloat(prompt("Informe a base menor:"))
let altura = parseFloat(prompt("Informe a altura:"))

let media = (baseMaior + baseMenor * altura) / 2

console.log("A área do trapézio  é " + media + ".")

document.getElementById("resultado").innerHTML = "A área do trapézio  é " + media + "."

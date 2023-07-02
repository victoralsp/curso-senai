// Declaração das variáveis
let operador = prompt("Informe a operação: ")
let num1 = Number(prompt("Informe o primeiro número"))
let num2 = Number(prompt("Informe o segundo número: "))

// Verifica a operação selecionada
if (operador == "+") {
    console.log(num1 + num2)
    document.getElementById("resultado").innerHTML = (num1 + num2)
}
else if (operador == "-") {
    console.log(num1 - num2)
    document.getElementById("resultado").innerHTML = (num1 - num2)
}
else if (operador == "/") {
    console.log(num1 / num2)
    document.getElementById("resultado").innerHTML = (num1 / num2)
}
else if (operador == "*") {
    console.log(num1 * num2)
    document.getElementById("resultado").innerHTML = (num1 * num2)
}
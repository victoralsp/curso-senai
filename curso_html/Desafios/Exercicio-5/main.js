let valor = Number(prompt("Informe o valor do produto:"))
let porcentagem = 0.1

let result  = (valor * porcentagem)

console.log("A comissão do vendedor é de " + result + ".")

document.getElementById("resultado").innerHTML = "A comissão do vendedor é de " + (result.toFixed(2)) + "."
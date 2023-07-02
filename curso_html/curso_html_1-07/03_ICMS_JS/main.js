// Declaração das variáveis
let valorProduto = parseFloat(prompt("Informe o valor do produto: "))
let estado = prompt("Informe o estado de destino: ")

// Condicionais
if (estado == "SP") {
    let valorICMS = valorProduto * 0.18
    console.log(valorICMS)
    document.getElementById("resultado").innerHTML = valorICMS
}
else if (estado == "RS") {
    let valorICMS = valorProduto * 0.12
    console.log(valorICMS)
    document.getElementById("resultado").innerHTML = valorICMS
}
else if (estado == "BA") {
    let valorICMS = valorProduto *0.07
    console.log(valorICMS)
    document.getElementById("resultado").innerHTML = valorICMS
}
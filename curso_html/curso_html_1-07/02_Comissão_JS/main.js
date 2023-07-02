// Declaração das variáveis
let valorProduto = parseFloat(prompt("Informe o valor do produto: "))

// Condições
if (valorProduto <= 5000) {
    let comissao = valorProduto * 0.05
    console.log(comissao)
    document.getElementById("resultado").innerHTML = (valorProduto * 0.05)
}
else if (valorProduto > 5000) {
    let comissao = valorProduto * 0.10
    console.log(comissao)
    document.getElementById("resultado").innerHTML = (valorProduto * 0.10)
}
let nota1 = parseFloat(prompt("Informe a primeira nota: "))
let nota2 = parseFloat(prompt("Informe a segunda nota: "))
let nota3 = parseFloat(prompt("Informe a terceira nota: "))

let media = (nota1 + nota2 + nota3) / 3

if (media >= 6) {
    console.log("A média do aluno é " + media + ". Aprovado!")
}
else if (media >= 3 && media < 6 ) {
    console.log("A média do aluno é " + media + ". Recuperação!")
}

else if (media < 3) {
    console.log("A média do aluno é " + media + ". Reprovado!")
}
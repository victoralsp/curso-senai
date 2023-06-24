let nome = "Victor"
let sobrenome = "Alves"
let idade = 18
let cidade = "Santo André/SP"

console.log(nome)
console.log(sobrenome)
console.log(idade)

console.log("Olá! Seu nome é " + nome + " " + sobrenome + ". Você tem " + idade + " anos e mora em " + cidade + ".")

document.getElementById("resultado").innerHTML = "Olá! Seu nome é " + nome + " " + sobrenome + ". Você tem " + idade + " anos e mora em " + cidade + "."
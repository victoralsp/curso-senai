let idade = Number(prompt("Informe a sua idade:"))

if (idade >= 18) {
    console.log("Você é maior de idade. Pode beber e dirigir.")
    document.getElementById("resultado").innerHTML = "Você é maior de idade. Pode beber e dirigir."
}
else {
    console.log("Você é menor de idade.")
    document.getElementById("resultado").innerHTML = "Você é menor de idade. Não pode beber e dirigir."
}

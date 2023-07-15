let hr = document.getElementById('hora')
let min = document.getElementById('min')
let seg = document.getElementById('seg')

function displayHora() {
    let date = new Date()

    // Buscar horas, minutos e segundos a partir da data 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30 * hh + mm / 2
    let mRotation = 6 * mm
    let sRotation = 6 * ss

    hr.style.transform = `rotate(${hRotation}deg)`
    min.style.transform = `rotate(${mRotation}deg)`
    seg.style.transform = `rotate(${sRotation}deg)`
}

setInterval(displayHora, 1000)

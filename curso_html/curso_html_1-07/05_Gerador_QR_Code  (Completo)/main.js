const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrContainer = document.querySelector(".qr-body");

let size = sizes.value;

// Função Gerar
generateBtn.addEventListener('click',(e) => {
    e.preventDefault();
    isEmptyInput();
});

// Função seleção de tamanhos
sizes.addEventListener('change',(e) => {
    size = e.target.value;
    isEmptyInput();
});

// Função para fazer o Download da imagem
downloadBtn.addEventListener('click',() => {
    let img = document.querySelector('.qr-body img');

    if (img !== null) {
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute('href', imgAtrr);
    }
    else {
        downloadBtn.setAttribute('href', `${document.querySelector('canvas').toDataURL()}`);
    }
});

// Função verifica se o campo está vazio
function isEmptyInput() {
    qrText.value.length > 0 ? generateQRCode() : alert("Entre com o texto ou URL para gerar o QR Code");
};

// Função para gerar o QR Code
function generateQRCode() {
    qrContainer.innerHTML = '';
    new QRCode(qrContainer, {
        text: qrText.value,
        height: size,
        width: size,
        colorLight: '#fff',
        colorDark: '#000',
    });
}
const generateBtn = document.getElementById('generate-btn');
const downloadBtn = document.getElementById('download-btn');
const qrContainer = document.getElementById('qr-container');

generateBtn.addEventListener('click', () => {
    const url = document.getElementById('url-input').value.trim();
    if (!url) {
        alert('Please enter a valid URL!');
        return;
    }

    qrContainer.style.display = '';
    qrContainer.innerHTML = '';

    const qrCode = new QRCode(qrContainer, {
        text: url,
        width: 250,
        height: 250
    });

    downloadBtn.style.display = 'inline-block';
});

downloadBtn.addEventListener('click', () => {
    const canvas = qrContainer.querySelector('canvas');
    const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    
    const link = document.createElement('a');
    link.href = image;
    link.download = 'qrcode.png';
    link.click();
});
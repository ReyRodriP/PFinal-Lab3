    function generateQR() {
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const email = document.getElementById('email').value;
        const direccion = document.getElementById('direccion').value;

        const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:${nombre}
TEL:${telefono}
EMAIL:${email}
ADR:${direccion}
END:VCARD`;

        document.getElementById('qrcode').innerHTML = '';

        const qrCode = new QRCode(document.getElementById('qrcode'), {
            text: vCard,
            width: 200,
            height: 200
        });
    }
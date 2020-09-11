const QR = new QRCode('qr-field', {
    width: 250,
    height: 250,
    colorLight : "#4e7ef4",

})
const inputQRCode = document.querySelector('#input-link')
const downloadLink = document.querySelector('.download-link')
const input = inputQRCode.querySelector('input')
const img = document.createElement('img')

inputQRCode.addEventListener('submit', e => {
    e.preventDefault()
    if(!e.target['qrCode-value'].value) return
    QR.makeCode(e.target['qrCode-value'].value)
})

document.body.addEventListener('change', e => {
    setTimeout(() => {
        const qrCode = document.querySelector('img')
        downloadLink.setAttribute('href', qrCode.src)
    }, 0)
})

downloadLink.addEventListener('mouseover', function(e) {
    const qrCode = downloadLink.querySelector('img')
    if(qrCode.style.display === 'none') return
    downloadLink.insertAdjacentHTML('beforebegin', `<div class="hint">Click to download</div>`)
})

downloadLink.addEventListener('mouseleave', e => {
    const hint = document.querySelector('.hint')
    if(!hint) return
    hint.remove()
})

downloadLink.addEventListener('click', function(e) {
    if(this.href.slice(-1) === '#') return
    this.setAttribute('download', true)
})

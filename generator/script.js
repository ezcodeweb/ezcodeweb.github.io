const inputValue = document.querySelector('.text-field')
const generateBtn = document.querySelector('.gen')
const mode = document.querySelectorAll('.mode li')
const uplaod = document.querySelector('.upload')
const fileSelector = document.querySelector('.file-selector')
const qrContainer = document.querySelector('.qr-container')
var download = document.querySelectorAll('.download button')

// default properties for QR Code
var properties = {
        width: 250,
        height: 250,
        type: "svg",
        margin: 10,
        data: '',
        image: '',
        backgroundOptions: {
            color: "white",
        },
        dotsOptions: {
            color: "black",
            type: "square"
        },
        cornersSquareOptions:{
            type: "square"
        },
        cornersDotOptions:{
            type: "square"
        },
        imageOptions: {
            margin: 0,
            imageSize: 0.9
        }
}

// On click generate button
generateBtn.onclick = () => {
    generateQr()
}

// also generate QR Code on changing mode
mode[0].onclick = () => {
    properties.dotsOptions.color = 'black'
    properties.dotsOptions.type = 'square'
    properties.cornersSquareOptions.type = 'square'
    properties.cornersDotOptions.type = 'square'
    generateQr(0)
}

mode[1].onclick = () => {
    properties.dotsOptions.color = 'black'
    properties.dotsOptions.type = 'extra-rounded'
    properties.cornersSquareOptions.type = 'extra-rounded'
    properties.cornersDotOptions.type = 'dot'
    generateQr(1)
}

mode[2].onclick = () => {
    properties.dotsOptions.color = 'black'
    properties.dotsOptions.type = 'dots'
    properties.cornersSquareOptions.type = 'dot'
    properties.cornersDotOptions.type = 'dot'
    generateQr(2)
}

// this will set the mode button on which button is clicked
function resetModeButton(v){
    for(var i = 0; i < 3; i++){
        if(v == i){
            mode[i].classList.add('active')
        }else{
            mode[i].classList.remove('active')
        }
    }
}

// also generate QR Code file select
uplaod.onclick = () => fileSelector.click()

fileSelector.onchange = () => {
    generateQr()
}

function generateQr(v) {
    if(inputValue.value){
        // if input field is not empty
        properties.image = ''
        qrContainer.innerHTML = ''
        properties.data = inputValue.value
        const qr = new QRCodeStyling(properties)
        qr.append(qrContainer);
        // change button
        if(v || v == 0){ resetModeButton(v) }
        // download
        download[0].onclick = () => qr.download({ name: "qr-code", extension: "png" });
        download[1].onclick = () => qr.download({ name: "qr-code", extension: "jpg" });
    }
}
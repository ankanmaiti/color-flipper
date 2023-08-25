const colorChangeButton = document.querySelector('[data-changer]')
const colorNameElement = document.querySelector('[data-color]')

function randomColorGenerate() {
    const chars = "0123456789abcdef"
    let code = "#"

    for (let i = 0; i < 6; i++) {
        const randIndex = Math.floor(Math.random() * chars.length)
        code += chars[randIndex]
    }

    return code
}


function setColorPropertiesInDocument() {
    const randomColor = randomColorGenerate()
    colorNameElement.setAttribute('data-color', randomColor)

    document.body.style.setProperty('--background-color', randomColor)
    navigator.clipboard.writeText(randomColor)
}


colorChangeButton.addEventListener('click', setColorPropertiesInDocument)
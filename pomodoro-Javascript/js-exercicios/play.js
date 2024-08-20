const button = document.getElementById('start-pause');
const imgDisplay = document.querySelector('.app__card-primary-butto-icon')

button.addEventListener('click', () => {
    setImageAttribute()
})

function setImageAttribute() {
    imgDisplay.setAttribute('src', 'imagens/pause.png')
}


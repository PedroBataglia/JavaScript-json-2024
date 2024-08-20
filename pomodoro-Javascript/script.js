const html = document.querySelector('html')
const buttonFoco = document.querySelector('.app__card-button--foco')
const buttonCurto = document.querySelector('.app__card-button--curto')
const buttonLongo = document.querySelector('.app__card-button--longo')
const botaoIniciar = document.querySelector('.app__card-primary-button')
const allButton = document.querySelectorAll('.app__card-button')

const timer = document.querySelector('#timer')
const pausePlay = document.querySelector('.app__title')
const banner = document.querySelector('.app__image')
const texto = document.querySelector('.app__title')


const duracaoFoco = 1500;
const duracaoDescansoCurso = 300;
const duracaoDescansoLongo = 900;


buttonFoco.addEventListener('click', () => {
    alterarContexto('foco')
    buttonFoco.classList.add('active')

})

buttonCurto.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    buttonCurto.classList.add('active')
})

buttonLongo.addEventListener('click', () => {
    alterarContexto('descanso-longo')
    buttonLongo.classList.add('active')
})


function alterarContexto(contexto) {
    allButton.forEach(function (contexto) {
        contexto.classList.remove('active')
    })
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":
            texto.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
        case "descanso-curto":
            texto.innerHTML = `Que tal dar uma respirada?
            <strong class="app__title-strong">faça uma pausa curta!</strong>`
            break;
        case "descanso-longo":
            texto.innerHTML = `Hora de voltar a superficie
            <strong class="app__title-strong">Faça uma pausa Longa.</strong>` 
            break;
    
        default:
            break;
    }
}

const hmtl = document.querySelector('html')
const focoBtn = document.querySelector('.app__card-button--foco')
const curtoBtn = document.querySelector('.app__card-button--curto')
const longoBtn = document.querySelector('.app__card-button--longo')
const displayTempo = document.getElementById('timer')
const banner = document.querySelector('.app__image')
const tituloAlterna = document.querySelector('.app__title')
const inicioPauseBtn = document.getElementById('start-pause')

focoBtn.addEventListener('click', () => {
  alterarContexto('foco')
})

curtoBtn.addEventListener('click', () => {
  alterarContexto('descanso-curto')
})

longoBtn.addEventListener('click', () => {
  alterarContexto('descanso-longo')
})

function alterarContexto(contexto) {
  hmtl.setAttribute('data-contexto', contexto)
  banner.setAttribute('src',`/imagens/${contexto}.png`)
}
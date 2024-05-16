const hmtl = document.querySelector('html')
const focoBtn = document.querySelector('.app__card-button--foco')
const curtoBtn = document.querySelector('.app__card-button--curto')
const longoBtn = document.querySelector('.app__card-button--longo')
const displayTempo = document.getElementById('timer')
const banner = document.querySelector('.app__image')
const tituloAlterna = document.querySelector('.app__title')
const inicioPauseBtn = document.getElementById('start-pause')
const botoes = document.querySelectorAll('.app__card-button')

focoBtn.addEventListener('click', () => {
  alterarContexto('foco')
  focoBtn.classList.add('active')
})

curtoBtn.addEventListener('click', () => {
  alterarContexto('descanso-curto')
  curtoBtn.classList.add('active')
})

longoBtn.addEventListener('click', () => {
  alterarContexto('descanso-longo')
  longoBtn.classList.add('active')
})

function alterarContexto(contexto) {
  botoes.forEach(function (contexto){
    contexto.classList.remove('active')
  })
  hmtl.setAttribute('data-contexto', contexto)
  banner.setAttribute('src', `/imagens/${contexto}.png`)

  switch (contexto) {
    case 'foco':
      tituloAlterna.innerHTML = `Otimize sua produtividade,<br>
        <strong class="app__title-strong">mergulhe no que importa.</strong>`
      break;
    case 'descanso-curto':
      tituloAlterna.innerHTML = `Que tal dar uma respirada? <br>
        <strong class="app__title-strong"> Faça uma pausa curta!</strong>`
      break;    
    case 'descanso-longo':
      tituloAlterna.innerHTML = `Hora de voltar à superfície. <br>
        <strong class="app__title-strong"> Faça uma pausa longa.</strong>`
    default:
      break;
  }
}
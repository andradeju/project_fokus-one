const hmtl = document.querySelector('html')
const focoBtn = document.querySelector('.app__card-button--foco')
const curtoBtn = document.querySelector('.app__card-button--curto')
const longoBtn = document.querySelector('.app__card-button--longo')
const displayTempo = document.getElementById('timer')
const banner = document.querySelector('.app__image')
const tituloAlterna = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const musicaFocoInput = document.querySelector('#alternar-musica')
const musica = new Audio('/sons/luna-rise-part-one.mp3') 
musica.loop = true 
const inicioPauseBtn = document.querySelector('#start-pause')
const iniciarPausarBtn = document.querySelector('#start-pause span')
const somIniciar = new Audio('./sons/play.wav')
const somPausar = new Audio('./sons/pause.mp3')
const somTimeOver = new Audio('./sons/beep.mp3')
const imgInicioPause = document.querySelector('.app__card-primary-butto-icon');
const tempoTela = document.querySelector('#timer')


let tempoDecorridoSeg = 1500
let intervaloId = null;


musicaFocoInput.addEventListener('change', () => {
  if(musica.paused) {
    musica.play()
  } else {
    musica.pause()
  }
})

focoBtn.addEventListener('click', () => {
  tempoDecorridoSeg = 1500
  alterarContexto('foco')
  focoBtn.classList.add('active')
})

curtoBtn.addEventListener('click', () => {
  tempoDecorridoSeg = 300
  alterarContexto('descanso-curto')
  curtoBtn.classList.add('active')
})

longoBtn.addEventListener('click', () => {
  tempoDecorridoSeg = 900
  alterarContexto('descanso-longo')
  longoBtn.classList.add('active')
})

function alterarContexto(contexto) {
  mostrarTempo()
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

const contagemRegressiva = () => {
  if(tempoDecorridoSeg <= 0){
    somTimeOver.play()
    alert('tempo finalizado')
    zerar()
    return
  }
  tempoDecorridoSeg -= 1
  mostrarTempo()
}

inicioPauseBtn.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar() {
  if(intervaloId) {
    somPausar.play()
    zerar()
    return
  }
  somIniciar.play()  
  intervaloId = setInterval(contagemRegressiva, 1000)
  iniciarPausarBtn.textContent = "Pausar"
  imgInicioPause.setAttribute('src','./imagens/pause.png')
}

function zerar() {
  clearInterval(intervaloId)
  iniciarPausarBtn.textContent = "Começar"
  imgInicioPause.setAttribute('src', './imagens/play_arrow.png')
  intervaloId = null;
}

function mostrarTempo() {
  const tempo = new Date(tempoDecorridoSeg  * 1000)
  const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute:'2-digit', second:'2-digit'})
  tempoTela.innerHTML =  `${tempoFormatado}`
}

mostrarTempo()
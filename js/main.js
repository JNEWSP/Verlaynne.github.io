// Efeito visual
$("body").quietflow({
  theme: "jumpingHearts", // Novo tema para corações pulando
  specificColors: [
      "rgb(255,0,0)", // Cor do coração
      "rgb(255,32,82)",
      "rgb(0,168,231)",
      "aqua"
  ]
});

// Função para criar corações pulando
function createJumpingHearts() {
    const heartContainer = document.createElement('div');
    heartContainer.className = 'heart-container';
    document.body.appendChild(heartContainer);

    for (let i = 0; i < 10; i++) { // Cria 10 corações
        const heart = document.createElement('div');
        heart.className = 'heart';
        heartContainer.appendChild(heart);
        
        // Define uma posição aleatória para cada coração
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.animationDelay = Math.random() * 2 + 's'; // Atraso aleatório na animação
    }
}

// Chama a função para criar corações pulando
createJumpingHearts();

// Seção de Áudio
var myAudio = document.getElementById("myAudio");
var myAudioEng = document.getElementById("myAudioEng");
var isPlaying = false;

function togglePlay() {
  if (isPlaying) {
      myAudio.pause();
  } else {
      myAudio.play();
  }
}
myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};

function togglePlayEng() {
  if (isPlaying) {
      myAudioEng.pause();
  } else {
      myAudioEng.play();
  }
}

myAudioEng.onplaying = function() {
  isPlaying = true;
};
myAudioEng.onpause = function() {
  isPlaying = false;
};

// Troca de ícones de música
$('.sound div').click(function() {
  $(this).find('i').toggleClass('fa-music fa-pause');
});

// Espera 3 segundos (3000 milissegundos) antes de abrir a carta
setTimeout(function() {
  const container = document.querySelector('.container');
  container.classList.add('open'); // Adiciona a classe 'open'
  container.classList.add('open-background'); // Adiciona a nova classe para mudar a cor de fundo
  document.querySelector('.cover').style.opacity = '1'; // Garante que a carta esteja visível
  document.querySelector('.cover2').style.opacity = '1'; // Garante que a carta esteja visível
}, 10);

// Alterna entre as imagens no contêiner
let currentImage = 1; // Variável para controlar qual imagem está sendo exibida

document.querySelector('#showCard').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    const cardContainer = document.querySelector('#cardContainer');
    cardContainer.style.display = 'flex'; // Mostra o contêiner
    cardContainer.classList.add('centered'); // Adiciona a classe para centralizar

    // Mostra a primeira imagem ao abrir
    document.getElementById('image1').style.display = 'block'; 
    document.getElementById('image2').style.display = 'none'; 
});

// Alterna entre as imagens ao clicar no contêiner
document.querySelector('#cardContainer').addEventListener('click', function() {
    if (currentImage === 1) {
        document.getElementById('image1').style.display = 'none'; // Oculta a primeira imagem
        document.getElementById('image2').style.display = 'block'; // Mostra a segunda imagem
        currentImage = 2; // Atualiza para a próxima imagem
    } else {
        document.getElementById('image1').style.display = 'block'; // Mostra a primeira imagem
        document.getElementById('image2').style.display = 'none'; // Oculta a segunda imagem
        currentImage = 1; // Atualiza para a próxima imagem
    }
});

// Fecha o contêiner de imagens ao clicar no botão de fechar
document.querySelector('#closeCard').addEventListener
opacity: 0; /* Inicialmente invisível */
transition: transform 1s ease-in-out, opacity 1s ease; /* Aumenta a duração da transição */
background: url('https://img.freepik.com/fotos-premium/textura-de-aquarela-rosa-pastel-digital_199112-177.jpg?semt=ais_hybrid') center center no-repeat; /* Adicione a URL da imagem aqui */
background-size: cover; /* Ajusta o tamanho da imagem para cobrir a área */
}

.container:hover .cover {
transform: rotateY(-145deg);
transition: transform 1s ease-in-out, opacity 1s ease; /* Aumenta a duração da transição */
}

.container:hover .cover2 {
transform: rotateY(145deg);
transition: transform 1s ease-in-out, opacity 1s ease; /* Aumenta a duração da transição */
}

.front,
.back,
.front2,
.back2 {
margin: 0;
display: block;
width: 100%;
height: 100%;
position: absolute;
backface-visibility: hidden; /* Adicionado para ocultar o verso */
}

.front {
background: rgba(255, 255, 255, 0.8);
color: #000;
display: flex;
justify-content: center;
align-items: center;
font-size: 24px;
border-radius: 10px;
text-align: center; /* Centraliza o texto */
}

.back {
background: rgba(0, 0, 0, 0.8);
color: #fff;
display: flex;
justify-content: center;
align-items: center;
font-size: 24px;
transform: rotateY(180deg);
border-radius: 10px;
}

.front2 {
background: rgba(255, 255, 255, 0.8);
color: #000;
display: flex;
justify-content: center;
align-items: center;
font-size: 24px;
border-radius: 10px;
text-align: center; /* Centraliza o texto */
}

.back2 {
background: rgba(0, 0, 0, 0.8);
color: #fff;
display: flex;
justify-content: center;
align-items: center;
font-size: 24px;
transform: rotateY(180deg);
border-radius: 10px;
}

.footer-text {
text-align: center;
margin-top: 20px;
}

.sound {
display: flex;
justify-content: center;
margin-top: 10px;
}

.sound div {
margin: 0 10px;
cursor: pointer;
}

.sound i {
font-size: 24px;
}
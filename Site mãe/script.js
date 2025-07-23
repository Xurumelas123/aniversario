document.addEventListener('DOMContentLoaded', () => {
  const revealButton = document.getElementById("revealButton");
  const message = document.getElementById("message");
  const toggleMusicBtn = document.getElementById("toggleMusic");
  const music = document.getElementById("bg-music");

  let index = 0;
  let isPlaying = false;

  const fullMessage = `
Querida chatonilda,

Neste dia tão especial, quero te agradecer por tudo que você é e tudo que já fez por nós.
Sua força, carinho e amor são a base da nossa família buscapé kkkk.
Que seu dia seja tão maravilhoso quanto o seu coração de mãe!

Te amo infinitamente, mais que mil milhões! 💕
`;

  // Função para revelar a mensagem
  revealButton.addEventListener("click", () => {
    if (!message.classList.contains("hidden")) {
      message.classList.add("hidden");
      message.classList.remove("visible");
      message.innerText = "";
      index = 0;
      revealButton.innerText = "Clique para ver minha mensagem 🎁";
    } else {
      message.classList.remove("hidden");
      message.classList.add("visible");
      revealButton.innerText = "Te amo, mãe! ❤️";
      typeWriter();
      startConfetti();
    }
  });

  // Efeito de digitação
  function typeWriter() {
    if (index < fullMessage.length) {
      message.innerText += fullMessage.charAt(index);
      index++;
      setTimeout(typeWriter, 40);
    }
  }

  // Função para criar balões
  function createBalloon() {
    const balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 70%)`;
    document.getElementById("balloons-container").appendChild(balloon);
    setTimeout(() => balloon.remove(), 8000);
  }
  setInterval(createBalloon, 500);

  // Configuração do confete
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let confetti = [];

  function createConfetti() {
    for (let i = 0; i < 150; i++) {
      confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 5 + 5,
        color: `hsl(${Math.random() * 360}, 100%, 70%)`,
        speed: Math.random() * 3 + 2,
        angle: Math.random() * 2 * Math.PI
      });
    }
  }

  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(c => {
      ctx.fillStyle = c.color;
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.size, 0, 2 * Math.PI);
      ctx.fill();
      c.y += c.speed;
      if (c.y > canvas.height) c.y = -10;
    });
    requestAnimationFrame(drawConfetti);
  }

  function startConfetti() {
    confetti = [];
    createConfetti();
    drawConfetti();
  }

  // Controle de música
  toggleMusicBtn.addEventListener("click", () => {
    if (isPlaying) {
      music.pause();
      toggleMusicBtn.innerText = "🔊 Música";
    } else {
      music.play();
      toggleMusicBtn.innerText = " Pausar Música";
    }
    isPlaying = !isPlaying;
  });

  // Inicializar o carousel
  $('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
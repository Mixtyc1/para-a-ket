document.getElementById("openCard").addEventListener("click", () => {
  const card = document.getElementById("card");
  card.classList.remove("closed");
  card.classList.add("opened");
  launchConfetti();
});

/* Confete do cartão */
function launchConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  let pieces = [];
  for (let i = 0; i < 30; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 8 + 2,
      color: ["#F472B6", "#FDE68A", "#60A5FA", "#34D399", "#FB7185"][Math.floor(Math.random() * 5)],
      speed: Math.random() * 3 + 2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let p of pieces) {
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function update() {
    for (let p of pieces) {
      p.y += p.speed;
      if (p.y > canvas.height) p.y = 0;
    }
  }

  function loop() {
    draw();
    update();
    requestAnimationFrame(loop);
  }

  loop();
}

/* Confete flutuante pelo site */
const floatingConfetti = document.getElementById("floatingConfetti");
for (let i = 0; i < 15; i++) {
  const confetti = document.createElement("div");
  const size = Math.random() * 12 + 6;
  confetti.style.width = size + "px";
  confetti.style.height = size + "px";
  confetti.style.backgroundColor = ["#f472b6", "#fde68a", "#60a5fa", "#34d399", "#fb7185"][i % 5];
  confetti.style.left = Math.random() * 100 + "%";
  confetti.style.top = "-10%";
  confetti.style.animationDuration = 6 + Math.random() * 6 + "s";
  confetti.style.animationDelay = Math.random() * 5 + "s";
  floatingConfetti.appendChild(confetti);
}



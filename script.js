gsap.registerPlugin(ScrollTrigger);

const frameCount = 300;
const currentFrame = index => (
  `images/male${String(index + 1).padStart(4, '0')}.png`
);

const images = [];
const imageSeq = { frame: 0 };

const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

images[0].onload = render;

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: 0.3,
    trigger: "#main",      
    start: "top top",
    // end: "bottom+=250 top",
  },
  onUpdate: render,
});

function render() {
  const img = images[imageSeq.frame];
  if (!img) return;

  const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
  const x = (canvas.width / 2) - (img.width / 2) * scale;
  const y = (canvas.height / 2) - (img.height / 2) * scale;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(img, x, y, img.width * scale, img.height * scale);
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});
//  chat 


//  slider code 
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;


document.getElementById('next').addEventListener('click', () => {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
});


document.getElementById('prev').addEventListener('click', () => {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  slides[currentIndex].classList.add('active');
});


setInterval(() => {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}, 6000); 





 

document.addEventListener('DOMContentLoaded', () => {
  const imageSources = [
    'images/youth1.png',
    'images/youth2.png',
    'images/youth3.png',
    'images/youth4.png'
  ];

  const sliderContainer = document.getElementById('bgSlider');
  if (!sliderContainer) return;

  sliderContainer.innerHTML = '';

  imageSources.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'SMRLYDO Event Background';
    img.classList.add('bg-slider-img');
    if (index === 0) {
      img.classList.add('active');
    }
    sliderContainer.appendChild(img);
  });

  const slides = sliderContainer.querySelectorAll('.bg-slider-img');
  let currentIndex = 0;

  function switchSlide() {
    if (slides.length <= 1) return;
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
  }

  setInterval(switchSlide, 5000);
});
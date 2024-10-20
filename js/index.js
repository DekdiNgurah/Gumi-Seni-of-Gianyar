// PARALLAX EFFECT
const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0,
    yValue = 0;

let rotateDegree = 0;

function update(cursorPosition) {
    parallax_el.forEach(el => {
      let speedx = parseFloat(el.dataset.speedx) || 0;
      let speedy = parseFloat(el.dataset.speedy) || 0;
      let speedz = parseFloat(el.dataset.speedz) || 0;
      let rotateSpeed = parseFloat(el.dataset.rotation) || 0;

        let isInleft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1  : -1;

        let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInleft * 0.1 ;

        el.style.transform = `perspective(2300px) translateZ(${zValue * speedz}px) rotateY(${rotateDegree * rotateSpeed}deg) translateX(calc(-50% + ${-xValue * speedx }px)) translateY(calc(-50% + ${yValue * speedy}px))` ;
    })
}

update(0);

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth /2;
    yValue = e.clientY - window.innerHeight /2;

    rotateDegree = (xValue /  (window.innerWidth /2)) * 20;

    update(e.clientX);

   
});


// BUTTON CLICK
const exploreButton = document.getElementById('btn-explore');

if (!localStorage.getItem('hasVisited')) {
    document.body.classList.add('no-scroll');

    exploreButton.addEventListener('click', () => {
        document.body.classList.remove('no-scroll'); 
        localStorage.setItem('hasVisited', 'true'); 
    });
}

function scrollToNextSection() {
  window.scrollTo({
      top: window.innerHeight, 
      behavior: 'smooth' 
  });
}

exploreButton.addEventListener('click', scrollToNextSection);




// POPULAR ART SLIDER

// Data for each slide
const artDataSLides = [
  {
      title: "Sukawati, Gianyar",
      description: "Tari Barong merupakan sebuah tarian yang melibatkan dua orang. Barong merupakan salah satu tokoh yang wujudnya menyerupai singa. Barong dianggap sebagai raja roh yang mewakili kebajikan atau dikenal juga sebagai sosok malaikat pelindung",
      subTitle: "Tari Barong Ket",
      location: "Desa Batubulan, Kecamatan Sukawati",
      image: "../assets/images/art-1.png" 
  },
  {
      title: "Blahbatuh, Gianyar",
      description: "Tari Sanghyang Dedari adalah tarian sakral yang berfungsi sebagai penolak bala atau wabah penyakit. Tarian ini merupakan warisan budaya pra-Hindu yang bertujuan untuk membuka komunikasi spiritual antara masyarakat dengan alam gaib.",
      subTitle: "Tari Sanghyang Dedari",
      location: "Desa Bona, Kecamatan Blahbatuh",
      image: "../assets/images/art-3.png" 
  },
  {
      title: "Tegalalang, Gianyar",
      description: "Ngerebeg memiliki makna untuk menolak bala, menetralkan roh jahat, dan menetralkan sifat buruk di dalam tubuh manusia dan alam semesta. Tradisi ini dilakukan secara rutin setiap 6 bulan sekali.",
      subTitle: "Ngerebeg",
      location: "Desa Tegalalang, Kecamatan Tegalalang",
      image: "../assets/images/art-4.png" 
  }
];

let currentSlide = 0;
let autoSlide;
let delayTime;

function showSlide(index) {
  const content = document.querySelector('.popular-art-content');
  content.classList.add('fade-out'); 

   setTimeout(() => {
        document.getElementById("tittle").innerText = artDataSLides[index].title;
        document.getElementById("description").innerText = artDataSLides[index].description;
        document.getElementById("sub-title").innerText = artDataSLides[index].subTitle;
        document.getElementById("location").innerText = artDataSLides[index].location;
        document.getElementById("image").innerHTML = `<img src="${artDataSLides[index].image}" alt="${artDataSLides[index].title}" style="width: 100%; height: 100%;">`;

        content.style.setProperty('--bg-image', `url(${artDataSLides[index].image})`);

        content.classList.remove('fade-out');
        content.classList.add('fade-in'); 

    }, 500);
}

function restartAutoSlide() {
  clearTimeout(delayTime);  
  clearInterval(autoSlide); 

  delayTime = setTimeout(() => {
      startAutoSlide(); 
  }, 5000);
}

function startAutoSlide() {
  autoSlide = setInterval(() => {
      currentSlide = (currentSlide + 1) % artDataSLides.length;
      showSlide(currentSlide);
  }, 3000); 
}

document.getElementById("nextBtn1").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % artDataSLides.length;
  showSlide(currentSlide);
  restartAutoSlide();
});

document.getElementById("prevBtn1").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + artDataSLides.length) % artDataSLides.length;
  showSlide(currentSlide);
  restartAutoSlide();
});

showSlide(currentSlide);
startAutoSlide(); 




// SLIDES NEWS
const newsSlides = document.querySelectorAll('.slide');
let currentIndex = 0;

function updateSlider() {
  newsSlides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentIndex) {
      slide.classList.add('active');
    }
  });

  const offset = -(currentIndex * 31) + 2; 
  document.querySelector('.slider').style.transform = `translateX(${offset}vw)`;
}

document.getElementById('nextBtn2').addEventListener('click', () => {
  if (currentIndex < newsSlides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlider();
});

document.getElementById('prevBtn2').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = newsSlides.length - 1; 
  }
  updateSlider();
});

updateSlider(); 



// SLIDER BRAND
document.querySelectorAll('.find-us-slider-1, .find-us-slider-2').forEach(slider => {
  const content = slider.innerHTML; 
  for (let i = 0; i < 4; i++) { 
    slider.innerHTML += content;
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.getElementById('gallery');
  const indicator = document.getElementById('indicator');

  gallery.addEventListener('scroll', function() {
      const scrollWidth = gallery.scrollWidth - gallery.clientWidth;
      const scrollLeft = gallery.scrollLeft;
      const scrollPercent = (scrollLeft / scrollWidth) * 100;
      indicator.style.width = scrollPercent + '%';
  });
});









// PARALLAX EFFECT
const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0,
    yValue = 0;

let rotateDegree = 0;

function update(cursorPosition) {
    parallax_el.forEach(el => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotateSpeed = el.dataset.rotation;

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



// HIDE NAVBAR SCROLL
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar-wrapper');

window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    navbar.style.top = '-80px'; 
  } else {
    navbar.style.top = '0'; 
  }
  lastScrollTop = currentScroll;

  

});



// TRANSPARENT NAVBAR SCROLL
const navbarWrapper = document.querySelector('.navbar-wrapper');

window.addEventListener('scroll', function() {
  if (window.scrollY > 500) {
    navbarWrapper.classList.add('solid');
  } else {
    navbarWrapper.classList.remove('solid');
  }
});



// DARK AND LIGHT THEMES
const toggleIcon = document.getElementById('toggleDark');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggleIcon.classList.remove('fa-sun');
  toggleIcon.classList.add('fa-moon');
}

toggleIcon.addEventListener('click', function() {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    toggleIcon.classList.remove('fa-sun');
    toggleIcon.classList.add('fa-moon');
    toggleIcon.style.color = '#121212'; // Moon color for dark mode
    localStorage.setItem('theme', 'dark');
  } else {
    toggleIcon.classList.remove('fa-moon');
    toggleIcon.classList.add('fa-sun');
    toggleIcon.style.color = '#f6af2d'; // Sun color for light mode
    localStorage.setItem('theme', 'light');

  }
});



// SLIDER NEWS
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function updateSlider() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentIndex) {
      slide.classList.add('active');
    }
  });

  const offset = -(currentIndex * 31) + 2; 
  document.querySelector('.slider').style.transform = `translateX(${offset}vw)`;
}

document.getElementById('nextBtn2').addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
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
    currentIndex = slides.length - 1; 
  }
  updateSlider();
});

updateSlider(); 

//TOOLTIP 
var tooltipToggeler = document.querySelectorAll('.tooltip-toggeler');
for(var i = 0; i < tooltipToggeler.length; i++){
    var dir = tooltipToggeler[i].getAttribute('data-dir');
    var title = tooltipToggeler[i].getAttribute('data-title');

    // Wrap the tooltip creation in a setTimeout to add a delay
    (function(element, dir, title) {
        setTimeout(function() {
            element.innerHTML += `
            <div class="tooltip ${dir}">
                <span>${title}</span>
            </div>
            `;
        }, 2000); // 2000 milliseconds = 2 seconds
    })(tooltipToggeler[i], dir, title);
}





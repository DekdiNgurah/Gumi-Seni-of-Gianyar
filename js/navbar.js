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
  if (window.scrollY > 50) {
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



// Fungsi untuk mengubah bahasa
function changeLanguage() {
  const selectedLanguage = document.getElementById('language-select').value;
  
  // Simpan pilihan bahasa ke localStorage
  localStorage.setItem('selectedLanguage', selectedLanguage);

  // Update teks elemen berdasarkan bahasa yang dipilih
  document.querySelectorAll('[data-lang-en]').forEach((element) => {
      if (selectedLanguage === 'en') {
          element.textContent = element.getAttribute('data-lang-en');
      } else {
          element.textContent = element.getAttribute('data-lang-id');
      }
  });
}

function loadLanguage() {
  const savedLanguage = localStorage.getItem('selectedLanguage') || 'en'; // Default: 'en'

  document.getElementById('language-select').value = savedLanguage;

  changeLanguage();
}

window.onload = loadLanguage;








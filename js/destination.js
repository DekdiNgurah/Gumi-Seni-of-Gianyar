// const containers = document.querySelectorAll('.nature, .art, .zoo');

// containers.forEach(container => {
//     const scrollContent = container.querySelector('.nature-content, .art-content, .zoo-content');
//     const slider = container.querySelector('.slider');

//     function updateSlider() {
//         const scrollWidth = scrollContent.scrollWidth - scrollContent.clientWidth;
//         const scrollLeft = scrollContent.scrollLeft;
//         const percentage = (scrollLeft / scrollWidth) * 100;
        
//         slider.style.width = percentage + '%';
//     }

//     scrollContent.addEventListener('scroll', updateSlider);

//     document.addEventListener('DOMContentLoaded', updateSlider);
// });


document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".image-header img");
    let currentImage = 0;
    const imageCount = images.length;

    function changeImage() {
        images[currentImage].classList.remove("active");

        currentImage = (currentImage + 1) % imageCount;

        images[currentImage].classList.add("active");
    }

    images[currentImage].classList.add("active");

    setInterval(changeImage, 5000);
});



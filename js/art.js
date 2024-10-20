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


const notifications = document.querySelector(".notifications");

const toastDetails = {
    timer: 5000,
    success: {
        icon: 'fa-circle-check',
        text: 'Ditambahkan ke favorit!',
    }
};

const removeToast = (toast) => {
    toast.classList.add("hide");
    setTimeout(() => toast.remove(), 500);
};

const createToast = () => {
    const { icon, text } = toastDetails.success;
    const toast = document.createElement("li");
    toast.className = `toast success`;
    toast.innerHTML = `<div class="notif">
                           <i class="fa-solid ${icon}"></i>
                           <span>${text}</span>
                        </div>
                        <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
    notifications.appendChild(toast);

    setTimeout(() => removeToast(toast), toastDetails.timer);
};

const loveIcons = document.querySelectorAll('.love-icon');
loveIcons.forEach(loveIcon => {
    loveIcon.addEventListener('click', function () {
    if (loveIcon.classList.contains('fa-regular')) {
        loveIcon.classList.remove('fa-regular');
        loveIcon.classList.add('fa-solid', 'favorited');
        createToast(); 
    } else {
        loveIcon.classList.remove('fa-solid', 'favorited');
        loveIcon.classList.add('fa-regular');
    }
    });
});
   


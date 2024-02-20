var images = [];
var currentIndex = 0;
var imageContainer = document.querySelector('.product-images');
// Lista de nume pentru imagini
var imageNames = [
    'image 1.png',
    'image 2.png',
    'image 3.jpg',
    'image 4.jpg',
    'image 5.png',
    'image 6.jpg'
];

// Crează elementele imagine și adaugă-le la container
for (var i = 0; i < imageNames.length; i++) {
    var img = document.createElement('img');
    img.src = imageNames[i];
    img.alt = '';
    images.push(img);
    imageContainer.appendChild(img);
}

// Afișează prima imagine la încărcarea paginii
images[currentIndex].style.display = 'block';

// Funcție pentru a schimba imaginea la fiecare 5 secunde
function changeImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
}


// Setează intervalul pentru a schimba imaginea la fiecare 4 secunde
setInterval(changeImage, 4000);
;


document.addEventListener("DOMContentLoaded", function() {
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebarClose = document.querySelector('.sidebar-close');
    const sidebar = document.querySelector('.sidebar');

    sidebarToggle.addEventListener('click', function() {
        sidebar.style.left = '0';
    });

    sidebarClose.addEventListener('click', function() {
        sidebar.style.left = '-300px';
    });
});


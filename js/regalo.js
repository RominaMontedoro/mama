let firstImageVisible = true;

function toggleImage() {
    const firstImage = document.getElementById('image1');
    const secondImage = document.getElementById('image2');

    if (firstImageVisible) {
        firstImage.style.display = 'none';
        secondImage.style.display = 'block';
    } else {
        firstImage.style.display = 'block';
        secondImage.style.display = 'none';
    }

    firstImageVisible = !firstImageVisible;
}

// Agregar un evento de clic a la primera imagen
document.getElementById('image1').addEventListener('click', toggleImage);

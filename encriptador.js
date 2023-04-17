let x = document.getElementById("output");
x.style.display = 'none';
function encrypt() {
    const image = document.getElementById("image");
    image.style.display = 'none';

    x = document.getElementById("output");
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        image.style.display = 'block';
        x.style.display = 'none';
    }
}


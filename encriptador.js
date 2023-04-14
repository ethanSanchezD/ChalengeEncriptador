let x = document.getElementById("output");
x.style.display = 'none';
function encrypt() {
    x = document.getElementById("output");
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
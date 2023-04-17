
function encode() {
    let output = document.getElementById("output");
    const noTextMessage = document.getElementById("no-text-message");
    const image = document.getElementById("image");
    const message = document.getElementById("encode-message");

    output.style.display = 'none';
    noTextMessage.style.display = 'none';
    image.style.display = 'none';
    output = document.getElementById("output");
    console.log(message.value);
    if ((message.value == "") || (output.style.display != "none")) {
        output.style.display = 'none';
        noTextMessage.style.display = 'block';
        image.style.display = 'block';
    } else {
        output.style.display = 'block';
        output.style.alignContent =
            image.style.display = 'none';
        noTextMessage.style.display = 'none';

    }
}


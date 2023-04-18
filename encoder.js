
function encodeClick() {
    let outputMessage = document.getElementById("output-message");
    const noTextMessage = document.getElementById("no-text-message");
    const image = document.getElementById("image");
    const messageInput = document.getElementById("encode-message");
    let copyButton = document.getElementById("copy");
    const coppyDiv = document.getElementById("div-of-copy");

    outputMessage.style.display = 'none';
    noTextMessage.style.display = 'none';
    image.style.display = 'none';
    outputMessage = document.getElementById("output-message");
    copyButton = document.getElementById("copy");




    if ((messageInput.value == "") || (outputMessage.style.display != "none")) {
        outputMessage.style.display = 'none';
        copyButton.style.display = 'none';
        coppyDiv.style.display = 'none';
        noTextMessage.style.display = 'block';
        image.style.display = 'block';
    } else {
        outputMessage.style.display = 'block';
        copyButton.style.display = 'block';
        coppyDiv.style.display = 'flex';
        image.style.display = 'none';
        noTextMessage.style.display = 'none';

    }
    encode();
}

function encode() {
    let outputMessage = document.getElementById("output-message");
    const messageInput = document.getElementById("encode-message");

    outputMessage.value = messageInput.value.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");




}

function decode() {
    let outputMessage = document.getElementById("output-message");
    const messageInput = document.getElementById("encode-message");

    outputMessage.value = messageInput.value.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
}

function copy() {
    let outputMessage = document.getElementById("output-message");

    outputMessage.select();
    document.execCommand("copy");


}


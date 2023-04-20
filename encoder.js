
function showOutputdiplays() {
    let outputMessage = document.getElementById("output-message");
    const noTextMessage = document.getElementById("no-text-message");
    const image = document.getElementById("image");
    const messageInput = document.getElementById("encode-message");
    let copyButton = document.getElementById("copy");
    const coppyDiv = document.getElementById("div-of-copy");

    outputMessage.style.display = 'none';
    noTextMessage.style.display = 'none';
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
}

function encode() {
    let outputMessage = document.getElementById("output-message");
    const messageInput = document.getElementById("encode-message");

    outputMessage.value = messageInput.value.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
}

function encodeClick() {
    showOutputdiplays();
    encode();
}



function decode() {
    let outputMessage = document.getElementById("output-message");
    const messageInput = document.getElementById("encode-message");

    outputMessage.value = messageInput.value.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
}

function decodeClick() {
    showOutputdiplays();
    decode();
}

function copy() {
    console.log()
    let outputMessage = document.getElementById("output-message");
    let section = document.getElementById('output-section');
    const message = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = 'message copied in your clipboard';
    message.appendChild(p);

    // console.log(message);
    message.classList.add('copied-message');
    section.appendChild(message);


    setTimeout(function () {
        console.log(message);
        message.style.display = 'none';

    }, 2000)


    outputMessage.select();
    document.execCommand("copy");
}


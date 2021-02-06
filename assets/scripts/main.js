// main.js

// Volume Level Controls
const volume_level_3 = 66;
const volume_level_2 = 33;
const volume_level_1 = 0;

// References to Elements
var horn = document.getElementById("horn-sound");
var slider = document.getElementById("volume-slider");
var incr = document.getElementById("volume-number");
var hornForm = document.getElementById("audio-selection");
var honk = document.getElementById("honk-btn");

// Event Listeners
honk.addEventListener("click", playHorn);
incr.addEventListener("input", numberToSlider);
slider.addEventListener("input",sliderToNumber);
hornForm.addEventListener("input", changeHornImg);


function changeHornImg() {
    if(document.getElementById("radio-air-horn").checked) {
        horn.src = "./assets/media/audio/air-horn.mp3";
        document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";
    }
    else if(document.getElementById("radio-car-horn").checked) {
        horn.src = "./assets/media/audio/car-horn.mp3";
        document.getElementById("sound-image").src = "./assets/media/images/car.svg";
    }
    else if(document.getElementById("radio-party-horn").checked) {
        horn.src = "./assets/media/audio/party-horn.mp3";
        document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";
    }
    
}

function numberToSlider() {
    let val = document.getElementById("volume-number").value;
    if(val == "")
    {
        val = 0;
    }
    document.getElementById("volume-slider").setAttribute("value",val);
    document.getElementById("volume-number").setAttribute("value",val);

    if( val > volume_level_3 ) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
        horn.volume = val/100;
    }
    else if ( val > volume_level_2 ) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
        horn.volume = val/100;
    }
    else if ( val > volume_level_1 ) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
        horn.volume = val/100;
    }
    else {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
        horn.volume = val/100;
    }
    document.getElementById("volume-slider").value = val;
}

function sliderToNumber() {
    let val = document.getElementById("volume-slider").value;

    document.getElementById("volume-number").setAttribute("value",val);
    document.getElementById("volume-slider").setAttribute("value",val);

    if( val > volume_level_3 ) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
        horn.volume = val/100;
    }
    else if ( val > volume_level_2 ) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
        horn.volume = val/100;
    }
    else if ( val > volume_level_1 ) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
        horn.volume = val/100;
    }
    else {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
        horn.volume = val/100;
    }
    document.getElementById("volume-number").value = val;
}

function playHorn(event) {
    if( Number(document.getElementById("volume-number").getAttribute("value")) ) {
        horn.play();
    }
    event.preventDefault();
}


// TODO

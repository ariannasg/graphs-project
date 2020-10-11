var maxAllowedWidth = 1650;
var minAllowedWidth = 150;
var widthInterval = 50;

function increase_width(){
    var imgContainer = document.getElementById("img-container");
    var currentWidth = imgContainer.clientWidth;

    if (currentWidth >= maxAllowedWidth) {
        alert("Reached maximum allowed width");
    } else {
        imgContainer.style.maxWidth = (currentWidth + widthInterval) + "px";
    }
}

function decrease_width(){
    var imgContainer = document.getElementById("img-container");
    var currentWidth = imgContainer.clientWidth;

    if (currentWidth <= minAllowedWidth) {
        alert("Reached minimum allowed width");
    } else {
        imgContainer.style.maxWidth = (currentWidth - widthInterval) + "px";
    }
}
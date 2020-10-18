var maxAllowedWidth = 1950;
var minAllowedWidth = 50;
var widthInterval = 15;

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
const tagline = "Building what matters.";
let index = 0;

function typeEffect() {
    if (index < tagline.length) {
        document.getElementById("tagline").innerHTML += tagline.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

window.onload = typeEffect;
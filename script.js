
document.addEventListener('DOMContentLoaded', function() {
    const text = "Building What Matters | Startup PM | Tech Enthusiast";
    let index = 0;
    function typeEffect() {
        document.getElementById('tagline').innerText = text.slice(0, index++);
        if (index <= text.length) {
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();
});

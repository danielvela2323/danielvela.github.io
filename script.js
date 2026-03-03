
const cursorLight = document.querySelector('.cursor-light');

document.addEventListener('mousemove', (e) => {
    cursorLight.style.left = e.clientX + 'px';
    cursorLight.style.top = e.clientY + 'px';
});


// Para cuando el curso salga y cuando entre
document.addEventListener('mouseleave', () => {
    cursorLight.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
    cursorLight.style.opacity = '1';
});





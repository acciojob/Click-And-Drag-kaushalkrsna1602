slider.addEventListener('mousedown', (event) => {
    isDown = true;
    slider.classList.add('active');
    startX = event.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    console.log('mousedown', { startX, scrollLeft });
});

slider.addEventListener('mousemove', (event) => {
    if (!isDown) return;
    event.preventDefault();
    const x = event.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
    console.log('mousemove', { x, walk, scrollLeft: slider.scrollLeft });
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
    console.log('mouseup');
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
    console.log('mouseleave');
});

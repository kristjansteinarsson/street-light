document.addEventListener("DOMContentLoaded", () => {
    const balls = document.querySelectorAll('.ball');
    let delay = 0;

    balls.forEach((ball, index) => {
        delay += 100;
        setTimeout(() => {
            ball.classList.add('bounce');
        }, delay);
    });
});

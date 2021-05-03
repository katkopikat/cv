const parallax = (e) => {
    document.querySelectorAll('.bg-el').forEach(el => {
        const speed = el.getAttribute('data-speed');
        el.style.transform = `translate(${e.clientX*speed/1000}px, ${e.clientY*speed/1000}px)`
    })
}

document.addEventListener('mousemove', parallax);


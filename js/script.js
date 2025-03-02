const ScrollRevealEffect = (() => {
    let items = [];

    const init = () => {
        items = document.querySelectorAll('.fade-up, .fade-left, .zoom-in');

        items.forEach(item => {
            const duration = item.getAttribute('data-aos-duration') || '600';
            item.style.transitionDuration = `${duration}ms`;
        });

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Para lo que ya es visible al cargar
    };

    const handleScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        items.forEach((item) => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        });
    };

    return { init };
})();

document.addEventListener('DOMContentLoaded', ScrollRevealEffect.init);

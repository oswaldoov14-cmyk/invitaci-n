/**
 * Script para manejar las animaciones de scroll (Fade In Up)
 */

document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar todos los elementos con la clase fade-in-up
    const fadeElements = document.querySelectorAll('.fade-in-up');

    // Configuración del Intersection Observer
    const observerOptions = {
        root: null, // usa el viewport del navegador
        rootMargin: '0px',
        threshold: 0.15 // 15% del elemento debe ser visible
    };

    // Callback que se ejecuta cuando los elementos intersectan
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añadir la clase 'visible' para disparar la animación CSS
                entry.target.classList.add('visible');
                
                // Dejar de observar el elemento una vez que ya apareció
                observer.unobserve(entry.target);
            }
        });
    };

    // Crear el observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observar cada elemento
    fadeElements.forEach(el => {
        observer.observe(el);
    });
});

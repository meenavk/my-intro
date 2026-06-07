// =========================
// FADE / REVEAL ANIMATION
// =========================

export function initializeFadeIn() {

    const elements = document.querySelectorAll(
        ".fade-in, .reveal-fast, .reveal-item, .reveal-slow"
    );

    if (!elements.length) return;

    const observer = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    // Stop observing after reveal
                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    elements.forEach(element => {
        observer.observe(element);
    });

}

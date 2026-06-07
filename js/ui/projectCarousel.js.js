// =========================
// PROJECT CAROUSEL
// =========================

export function initializeProjectCarousel() {

    const wrapper =
        document.getElementById(
            "projects-wrapper"
        );

    const nextBtn =
        document.querySelector(
            ".next-btn"
        );

    const prevBtn =
        document.querySelector(
            ".prev-btn"
        );

    if (
        !wrapper ||
        !nextBtn ||
        !prevBtn
    ) {
        return;
    }

    let currentIndex = 0;

    function updateCards() {

        return wrapper.querySelectorAll(
            ".project-group"
        );

    }

    function showSlide(index) {

        const cards =
            updateCards();

        const total =
            cards.length;

        if (!total) return;

        currentIndex =
            (index + total) % total;

        const card =
            cards[currentIndex];

        const offset =
            card.offsetLeft;

        wrapper.scrollTo({
            left: offset,
            behavior: "smooth"
        });

        // Collapse open project details

        document
            .querySelectorAll(
                ".project-details"
            )
            .forEach(el => {

                el.style.maxHeight =
                    "0px";

                el.style.padding =
                    "0 22px";

            });

        document
            .querySelectorAll(
                ".project-group"
            )
            .forEach(el => {

                el.classList.remove(
                    "active"
                );

            });

    }

    nextBtn.addEventListener(
        "click",
        () => {

            showSlide(
                currentIndex + 1
            );

        }
    );

    prevBtn.addEventListener(
        "click",
        () => {

            showSlide(
                currentIndex - 1
            );

        }
    );

    setTimeout(
        () => showSlide(0),
        300
    );

}

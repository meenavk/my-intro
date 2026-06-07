// =========================
// AUTO EXPERTISE HOVER
// =========================

export function initializeAutoExpertiseHover() {

    let currentIndex = -1;

    setInterval(() => {

        const detailedSection =
            document.getElementById(
                "detailedExpertise"
            );

        const isDetailedOpen =
            detailedSection &&
            detailedSection.classList.contains(
                "show"
            );

        let cards = [];

        // Show Less Mode

        if (!isDetailedOpen) {

            const primaryGrid =
                document.querySelector(
                    ".expertise-card > .expertise-grid"
                );

            if (!primaryGrid) {
                return;
            }

            cards =
                primaryGrid.querySelectorAll(
                    ".expertise-item"
                );

        }

        // Detailed Mode

        else {

            cards =
                document.querySelectorAll(
                    ".expertise-item"
                );

        }

        if (!cards.length) {
            return;
        }

        document
            .querySelectorAll(
                ".expertise-item"
            )
            .forEach(card => {

                card.classList.remove(
                    "auto-hover"
                );

            });

        let randomIndex =
            Math.floor(
                Math.random() *
                cards.length
            );

        while (
            randomIndex === currentIndex &&
            cards.length > 1
        ) {

            randomIndex =
                Math.floor(
                    Math.random() *
                    cards.length
                );

        }

        currentIndex =
            randomIndex;

        cards[randomIndex]
            .classList.add(
                "auto-hover"
            );

    }, 2500);

}

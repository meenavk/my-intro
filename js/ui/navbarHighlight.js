// =========================
// NAVBAR ACTIVE LINK
// =========================

export function initializeNavbarHighlight() {

    const navLinks =
        document.querySelectorAll(
            ".nav-links a"
        );

    if (!navLinks.length) return;

    function updateActiveLink() {

        

        let currentSection =
            "hero-section";

        const scrollPosition =
            window.scrollY + 65;

        navLinks.forEach(link => {

            const targetId =
                link.getAttribute("href")
                    .replace("#", "");

            const section =
                document.getElementById(
                    targetId
                );

            if (!section) return;

            if (
                scrollPosition >=
                section.offsetTop
            ) {

                currentSection =
                    targetId;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove(
                "active"
            );

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveLink
    );

    updateActiveLink();

}

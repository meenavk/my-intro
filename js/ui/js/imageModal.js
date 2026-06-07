// =========================
// IMAGE MODAL
// =========================

export function initializeImagePreview() {

    const modal =
        document.getElementById(
            "imageModal"
        );

    const modalImg =
        document.getElementById(
            "modalImage"
        );

    const closeBtn =
        document.getElementById(
            "closeModal"
        );

    if (
        !modal ||
        !modalImg ||
        !closeBtn
    ) {
        return;
    }

    function attachEvents() {

        const images =
            document.querySelectorAll(
                ".preview-image"
            );

        images.forEach(img => {

            img.addEventListener(
                "click",
                () => {

                    modal.style.display =
                        "flex";

                    modalImg.src =
                        img.src;

                }
            );

        });

    }

    attachEvents();

    closeBtn.addEventListener(
        "click",
        () => {

            modal.style.display =
                "none";

        }
    );

    modal.addEventListener(
        "click",
        (e) => {

            if (e.target === modal) {

                modal.style.display =
                    "none";

            }

        }
    );

    document.addEventListener(
        "keydown",
        (e) => {

            if (
                e.key === "Escape"
            ) {

                modal.style.display =
                    "none";

            }

        }
    );

}

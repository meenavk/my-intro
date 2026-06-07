// =========================
// IMPORTS
// =========================

import { sleep } from "../utils/sleep.js";
import { typeText } from "./typing.js";


// =========================
// LANDING ANIMATION
// =========================

export async function startLandingSequence() {

    const hero =
        document.getElementById("hero-section");

    const navbar =
        document.querySelector(".navbar");

    if (!hero || !navbar) {

        console.warn(
            "Hero section or navbar not found."
        );

        return;
    }

    // Prepare sections

    prepareAnimatedSections();

    // Run typing effect

    await typeText();

    // Small pause

    await sleep(500);

    // Show navbar

    navbar.classList.remove(
        "navbar-hidden"
    );

    navbar.classList.add(
        "navbar-visible"
    );

    // Move hero upward

    hero.classList.add(
        "hero-top"
    );

    // Wait for hero animation

    await sleep(1500);

    // Reveal sections

    await revealSectionsSequentially();

}


// =========================
// PREPARE SECTIONS
// =========================

function prepareAnimatedSections() {

    const sectionIds = [

        "about-container",
        "summary-container",
        "expertise-container",
        "skills-container",
        "experience-container",
        "education-container",
        "technologies-container",
        "projects-container",
        "contact-container",
        "footer-container"

    ];

    sectionIds.forEach(
        (id, index) => {

            const section =
                document.getElementById(id);

            if (!section) return;

            section.classList.add(
                "animated-section"
            );

            if (index % 2 === 0) {

                section.classList.add(
                    "slide-left"
                );

            } else {

                section.classList.add(
                    "slide-right"
                );

            }

        }
    );

}


// =========================
// REVEAL SECTIONS
// =========================

async function revealSectionsSequentially() {

    const sections =
        document.querySelectorAll(
            ".animated-section"
        );

    for (const section of sections) {

        section.classList.add(
            "show-section"
        );

        await sleep(350);

    }

}

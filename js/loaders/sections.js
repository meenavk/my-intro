// =========================
// IMPORTS
// =========================

import { loadRoles } from "./roles.js";
import { loadProjects } from "./projects.js";
import { initializeFadeIn } from "../animations/fadeIn.js";


// =========================
// LOAD SINGLE SECTION
// =========================

export async function loadSection(id, file) {

    const container = document.getElementById(id);

    if (!container) return;

    try {

        const response = await fetch(file);

        if (!response.ok) {

            console.error(`Missing file: ${file}`);
            return;

        }

        container.innerHTML = await response.text();

    } catch (error) {

        console.error(
            `Failed loading section: ${file}`,
            error
        );

    }
}


// =========================
// LOAD ALL SECTIONS
// =========================

export async function loadSections() {

    const sectionPromises = [

        loadSection(
            "about-container",
            "sections/about.html"
        ),

        loadSection(
            "summary-container",
            "sections/summary.html"
        ),

        loadSection(
            "expertise-container",
            "sections/expertise.html"
        ),

        loadSection(
            "skills-container",
            "sections/skills.html"
        ),

        loadSection(
            "experience-container",
            "sections/experience.html"
        ),

        loadSection(
            "education-container",
            "sections/education.html"
        ),

        loadSection(
            "technologies-container",
            "sections/technologies.html"
        ),

        loadSection(
            "contact-container",
            "sections/contact.html"
        ),

        loadSection(
            "footer-container",
            "sections/footer.html"
        )

    ];

    // Load all main sections
    await Promise.all(sectionPromises);

    // Load dynamic content
    await loadRoles();
    await loadProjects();

    // Reinitialize fade effects after DOM injection
    initializeFadeIn();
}

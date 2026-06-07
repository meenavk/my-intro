// =========================
// IMPORTS
// =========================

import { initializeProjectCarousel }
    from "../ui/projectCarousel.js";


// =========================
// LOAD PROJECTS
// =========================

export async function loadProjects() {

    const container =
        document.getElementById("projects-container");

    if (!container) return;

    try {

        // Load main projects section

        const response =
            await fetch("sections/projects.html");

        if (!response.ok) {

            console.error(
                "projects.html missing"
            );

            return;
        }

        container.innerHTML =
            await response.text();

        // Project cards wrapper

        const wrapper =
            document.getElementById(
                "projects-wrapper"
            );

        if (!wrapper) {

            console.error(
                "projects-wrapper not found"
            );

            return;
        }

        const projectNumbers =
            [1, 2, 3, 4, 5];

        let html = "";

        for (const id of projectNumbers) {

            try {

                const projectResponse =
                    await fetch(
                        `sections/projects/project-${id}.html`
                    );

                if (!projectResponse.ok) {

                    console.warn(
                        `Project file missing: project-${id}.html`
                    );

                    continue;
                }

                html +=
                    await projectResponse.text();

            } catch (error) {

                console.error(
                    "Project load error:",
                    id,
                    error
                );
            }
        }

        // Insert all projects at once

        wrapper.innerHTML = html;

        // Initialize carousel

        initializeProjectCarousel();

    } catch (error) {

        console.error(
            "Projects load failed",
            error
        );
    }
}

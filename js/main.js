// =========================
// IMPORTS
// =========================

import { loadSections } from "./loaders/sections.js";

import { initializeFadeIn }
    from "./animations/fadeIn.js";

import { initializeImagePreview }
    from "./ui/imageModal.js";

import { initializeAutoExpertiseHover }
    from "./ui/expertiseHover.js";

import { initializeToggles }
    from "./ui/toggles.js";

import { startLandingSequence }
    from "./animations/landing.js";

import { initializeNavbarHighlight }
    from "./ui/navbarHighlight.js";

// =========================
// APP INITIALIZATION
// =========================

document.addEventListener(
    "DOMContentLoaded",
    async () => {

        try {

            // Load all dynamic sections
            await loadSections();

            // Initialize UI features
            initializeFadeIn();
            initializeImagePreview();
            initializeAutoExpertiseHover();
            initializeToggles();
            initializeNavbarHighlight();

            // Start hero animation sequence
            await startLandingSequence();

        } catch (error) {

            console.error(
                "Application initialization failed:",
                error
            );

        }

    }
);

// =========================
// TOGGLE EVENTS
// =========================

export function initializeToggles() {

    document.addEventListener(
        "click",
        (e) => {

            // Summary

            const summaryBtn =
                e.target.closest(
                    "#toggleSummaryBtn"
                );

            if (summaryBtn) {

                toggleSection(
                    summaryBtn,
                    "detailedSummary"
                );

                return;
            }

            // About

            const aboutBtn =
                e.target.closest(
                    "#toggleAboutBtn"
                );

            if (aboutBtn) {

                toggleSection(
                    aboutBtn,
                    "detailedAbout"
                );

                return;
            }

            // Expertise

            const expertiseBtn =
                e.target.closest(
                    "#toggleExpertiseBtn"
                );

            if (expertiseBtn) {

                toggleSection(
                    expertiseBtn,
                    "detailedExpertise"
                );

                return;
            }

            // Skills

            const skillsBtn =
                e.target.closest(
                    "#toggleSkillsBtn"
                );

            if (skillsBtn) {

                toggleSection(
                    skillsBtn,
                    "allSkills"
                );

                return;
            }

            // Education

            const educationBtn =
                e.target.closest(
                    "#toggleEducationBtn"
                );

            if (educationBtn) {

                toggleSection(
                    educationBtn,
                    "detailedEducation"
                );

                return;
            }

            // Technologies

            const technologiesBtn =
                e.target.closest(
                    "#toggleTechnologiesBtn"
                );

            if (technologiesBtn) {

                toggleSection(
                    technologiesBtn,
                    "detailedTechnologies"
                );

                return;
            }

            // =========================
            // EXPERIENCE
            // =========================

            const roleBtn =
                e.target.closest(
                    ".role-toggle-btn"
                );

            if (roleBtn) {

                const group =
                    roleBtn.closest(
                        ".experience-group"
                    );

                if (!group) return;

                const isOpen =
                    group.classList.toggle(
                        "active"
                    );

                updateButtonIcon(
                    roleBtn,
                    isOpen
                );

                return;
            }

            // =========================
            // PROJECTS
            // =========================

            const projectBtn =
                e.target.closest(
                    ".project-toggle-btn"
                );

            if (projectBtn) {

                const group =
                    projectBtn.closest(
                        ".project-group"
                    );

                if (!group) return;

                const details =
                    group.querySelector(
                        ".project-details"
                    );

                if (!details) return;

                const isOpen =
                    group.classList.toggle(
                        "active"
                    );

                if (isOpen) {

                    details.style.maxHeight =
                        details.scrollHeight +
                        "px";

                    details.style.padding =
                        "18px 22px";

                } else {

                    details.style.maxHeight =
                        "0px";

                    details.style.padding =
                        "0 22px";

                }

                updateButtonIcon(
                    projectBtn,
                    isOpen
                );

                return;
            }

        }
    );

}


// =========================
// GENERIC SECTION TOGGLE
// =========================

function toggleSection(
    button,
    sectionId
) {

    const section =
        document.getElementById(
            sectionId
        );

    if (!section) return;

    const isOpen =
        section.classList.toggle(
            "show"
        );

    updateButtonIcon(
        button,
        isOpen
    );

}


// =========================
// BUTTON ICON HELPER
// =========================

function updateButtonIcon(
    button,
    isOpen
) {

    const icon =
        button.querySelector("i");

    if (!icon) return;

    icon.classList.toggle(
        "fa-chevron-down",
        !isOpen
    );

    icon.classList.toggle(
        "fa-chevron-up",
        isOpen
    );

}

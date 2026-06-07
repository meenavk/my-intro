// =========================
// TOGGLE EVENTS
// =========================

export function initializeToggles() {

    document.addEventListener(
        "click",
        (e) => {

            // Summary

            if (
                e.target.id ===
                "toggleSummaryBtn"
            ) {

                toggleSection(
                    e.target,
                    "detailedSummary",
                    "Show Detailed",
                    "Show Less"
                );

            }

            // About

            if (
                e.target.id ===
                "toggleAboutBtn"
            ) {

                toggleSection(
                    e.target,
                    "detailedAbout",
                    "Show Detailed",
                    "Show Less"
                );

            }

            // Expertise

            if (
                e.target.id ===
                "toggleExpertiseBtn"
            ) {

                toggleSection(
                    e.target,
                    "detailedExpertise",
                    "Show Detailed",
                    "Show Less"
                );

            }

            // Skills

            if (
                e.target.id ===
                "toggleSkillsBtn"
            ) {

                toggleSection(
                    e.target,
                    "allSkills",
                    "Show All",
                    "Show Less"
                );

            }

            // Education

            if (
                e.target.id ===
                "toggleEducationBtn"
            ) {

                toggleSection(
                    e.target,
                    "detailedEducation",
                    "Show Detailed",
                    "Show Less"
                );

            }

            // Technologies

            if (
                e.target.id ===
                "toggleTechnologiesBtn"
            ) {

                toggleSection(
                    e.target,
                    "detailedTechnologies",
                    "Show Detailed",
                    "Show Less"
                );

            }

            // Experience

            if (
                e.target.matches(
                    ".role-toggle-btn"
                )
            ) {

                const group =
                    e.target.closest(
                        ".experience-group"
                    );

                if (!group) return;

                const isOpen =
                    group.classList.contains(
                        "active"
                    );

                if (isOpen) {

                    group.classList.remove(
                        "active"
                    );

                    e.target.textContent =
                        "Show Details";

                } else {

                    group.classList.add(
                        "active"
                    );

                    e.target.textContent =
                        "Show Less";

                }

            }

            // Projects

            if (
                e.target.matches(
                    ".project-toggle-btn"
                )
            ) {

                const group =
                    e.target.closest(
                        ".project-group"
                    );

                if (!group) return;

                const details =
                    group.querySelector(
                        ".project-details"
                    );

                if (!details) return;

                const isOpen =
                    group.classList.contains(
                        "active"
                    );

                if (isOpen) {

                    details.style.maxHeight =
                        "0px";

                    details.style.padding =
                        "0 22px";

                    group.classList.remove(
                        "active"
                    );

                    e.target.textContent =
                        "Show Details";

                } else {

                    details.style.maxHeight =
                        details.scrollHeight +
                        "px";

                    details.style.padding =
                        "18px 22px";

                    group.classList.add(
                        "active"
                    );

                    e.target.textContent =
                        "Show Less";

                }

            }

        }
    );

}


// =========================
// GENERIC TOGGLE HELPER
// =========================

function toggleSection(
    button,
    sectionId,
    closedText,
    openText
) {

    const section =
        document.getElementById(
            sectionId
        );

    if (!section) return;

    const isOpen =
        section.classList.contains(
            "show"
        );

    section.classList.toggle(
        "show"
    );

    button.textContent =
        isOpen
            ? closedText
            : openText;

}

// =========================
// LOAD ROLES
// =========================

export async function loadRoles() {

    const rolesContainer =
        document.getElementById("roles-container");

    if (!rolesContainer) return;

    const roleNumbers =
        [7, 6, 5, 4, 3, 2, 1];

    let html = "";

    for (const role of roleNumbers) {

        try {

            const response =
                await fetch(
                    `sections/roles/role-${role}.html`
                );

            if (!response.ok) {

                console.warn(
                    `Role file missing: role-${role}.html`
                );

                continue;
            }

            html += await response.text();

        } catch (error) {

            console.error(
                "Role load error:",
                role,
                error
            );

        }
    }

    rolesContainer.innerHTML = html;
}

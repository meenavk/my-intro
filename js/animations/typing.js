// =========================
// TYPING EFFECT
// =========================

const text =
    "Automation & Digital Manufacturing | PLC/SCADA (Rockwell) | GuardLogix & Machine Safety | Motion Control | Cognex Vision | MES | OT-IT Integration | Industry 4.0 | Python, Django, OpenCV | AI-Driven Industrial Solutions";
    
let index = 0;
let typingElement = null;
let isTyping = false;

export function typeText() {

    return new Promise((resolve) => {

        // Prevent duplicate typing runs

        if (isTyping) {
            resolve();
            return;
        }

        isTyping = true;

        if (!typingElement) {

            typingElement =
                document.querySelector(".typing-text");

        }

        if (!typingElement) {

            console.warn(
                ".typing-text element not found"
            );

            isTyping = false;
            resolve();
            return;

        }

        function type() {

            if (index < text.length) {

                typingElement.innerHTML +=
                    text.charAt(index);

                index++;

                setTimeout(type, 60);

            } else {

                isTyping = false;
                resolve();

            }

        }

        type();

    });

}

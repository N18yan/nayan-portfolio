

// =========================
// DYNAMIC GREETING
// =========================

const greeting = document.getElementById("greeting");

const hour = new Date().getHours();

if (hour < 12) {
    greeting.textContent = "Good Morning 👋";
}
else if (hour < 18) {
    greeting.textContent = "Good Afternoon 👋";
}
else {
    greeting.textContent = "Good Evening 👋";
}


// =========================
// TYPING EFFECT
// =========================

const roles = [
    "Data Analyst",
    "Python Developer",
    "Power BI Developer",
    "SQL Developer"
];

let roleIndex = 0;
let charIndex = 0;

const typingText = document.getElementById("typing-text");

function typeRole() {

    if (charIndex < roles[roleIndex].length) {

        typingText.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeRole, 100);
    }
    else {

        setTimeout(deleteRole, 1500);
    }
}

function deleteRole() {

    if (charIndex > 0) {

        typingText.textContent =
            roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(deleteRole, 50);
    }
    else {

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

        setTimeout(typeRole, 300);
    }
}

typingText.textContent = "";

typeRole();


// =========================
// CONTACT SCROLL
// =========================

function scrollToContact() {

    document
        .getElementById("contact")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// =========================
// RESUME DOWNLOAD
// =========================

const resumeBtn =
    document.getElementById("resume-btn");

resumeBtn.addEventListener("click", () => {

    // Put your resume PDF inside project folder
    // Example: Resume/Nayan_Rathod_Resume.pdf

    window.open(
        "Resume/resume.pdf",
        "_blank"
    );
});


// =========================
// FADE IN ON SCROLL
// =========================

const sections =
    document.querySelectorAll("section");

const observer =
    new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";
            }
        });

    }, {
        threshold: 0.2
    });

sections.forEach((section) => {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(40px)";

    section.style.transition =
        "all 0.8s ease";

    observer.observe(section);
});
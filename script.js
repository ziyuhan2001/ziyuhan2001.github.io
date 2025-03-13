document.addEventListener("DOMContentLoaded", () => {
    const starryBackground = document.querySelector(".starry-background");

    // Function to create a star
    function createStar() {
        const star = document.createElement("div");
        star.className = "star";
        const size = Math.random() * 3 + 1; // Random size between 1px and 4px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        starryBackground.appendChild(star);
    }

    // Create multiple stars
    for (let i = 0; i < 50; i++) {
        createStar();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const phrases = ["industrial engineer.", "data analyst.", "software developer.", "problem solver.", "continuous learner.", "badminton enthusiast."];
    let currentIndex = 0;
    let letterIndex = 0;
    const h3Element = document.querySelector(".intro-screen h3");
    let isDeleting = false;

    // Clear any initial content from h3 to ensure it starts empty
    h3Element.innerHTML = `<span class="typing-text"></span><span class="cursor">|</span>`;

    const typingTextSpan = h3Element.querySelector(".typing-text");
    const cursorSpan = h3Element.querySelector(".cursor");

    // Cursor animation
    cursorSpan.style.display = "inline-block";
    cursorSpan.style.animation = "blink 0.7s steps(2, start) infinite";

    function typeEffect() {
        const currentPhrase = phrases[currentIndex];

        if (isDeleting) {
            typingTextSpan.textContent = currentPhrase.substring(0, letterIndex--);
        } else {
            typingTextSpan.textContent = currentPhrase.substring(0, letterIndex++);
        }

        if (!isDeleting && letterIndex === currentPhrase.length) {
            setTimeout(() => (isDeleting = true), 1000); // Pause before deleting
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % phrases.length;
        }

        const typingSpeed = isDeleting ? 50 : 100;
        setTimeout(typeEffect, typingSpeed);
    }

    // Start typing effect after 0.5s delay
    setTimeout(() => {
        typeEffect();
    }, 1200);
});

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbar = document.querySelector(".navbar");
    const introScreen = document.querySelector(".intro-screen");

    // Function to check if the user is on the intro screen
    function isOnIntroScreen() {
        const introScreenBottom = introScreen.getBoundingClientRect().bottom;
        return introScreenBottom > 0;
    }

    // Hide/show navbar based on scroll position
    window.addEventListener("scroll", () => {
        if (isOnIntroScreen()) {
            navbar.classList.remove("hidden");
        } else {
            navbar.classList.add("hidden");
        }
    });

    // Smooth scroll to sections
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = link.getAttribute("href"); // Get the target section ID
            const targetSection = document.querySelector(targetId); // Find the target section

            if (targetSection) {
                let offset = 0; // Default offset for most sections

                // Custom offset for the Introduction section
                if (targetId === "#introduction-section") {
                    offset = 80; // Adjust this value to match 5rem (5rem = 80px)
                }

                // Calculate the target position
                const targetPosition = targetSection.offsetTop - offset;

                // Scroll to the target section smoothly
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth",
                });
            }
        });
    });
});

// Blinking cursor animation
const style = document.createElement('style');
style.textContent = `
    @keyframes blink {
        0% { opacity: 1; }
        50% { opacity: 0; }
        100% { opacity: 1; }
    }
`;

document.head.appendChild(style);

document.addEventListener("DOMContentLoaded", function () {
    const jobTitleItems = document.querySelectorAll(".job-title-item");
    const descriptionContents = document.querySelectorAll(".description-content");

    jobTitleItems.forEach((item) => {
        item.addEventListener("click", function () {
            // Remove active class from all job title items and descriptions
            jobTitleItems.forEach((job) => job.classList.remove("active"));
            descriptionContents.forEach((desc) => desc.classList.remove("active"));

            // Add active class to the clicked job title item and corresponding description
            const index = item.getAttribute("data-index");
            item.classList.add("active");
            descriptionContents[index].classList.add("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".custom-cursor");

    // Move the cursor with the mouse
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Add hover effect when hovering over interactive elements
    const hoverElements = document.querySelectorAll("a, button, input, textarea, select, .nav-link, .resume-button, .project-button, .social-icon, .job-title-item");
    hoverElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
            cursor.classList.add("hover");
        });
        element.addEventListener("mouseleave", () => {
            cursor.classList.remove("hover");
        });
    });
});

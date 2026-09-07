// Mobile Menu

function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");

}


// Enrollment Button

function showMessage() {

    alert(
        "Welcome to Bano Qabil! Registration section is ready."
    );

}


// Contact Form

function sendMessage() {

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const message =
        document.getElementById("message").value;


    if (name === "" || email === "" || message === "") {

        alert("Please fill all fields.");

        return;
    }


    alert(
        "Thank you " + name +
        "! Your message has been submitted."
    );


    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

}


// Scroll Animation

const cards =
    document.querySelectorAll(
        ".course-card, .why-card"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                }

            });

        }
    );


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.6s";

    observer.observe(card);

});
// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("show");

    });

}


// CLOSE MOBILE MENU WHEN LINK IS CLICKED

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {
            navMenu.classList.remove("show");
        }

    });

});


// CURRENT YEAR

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// CONTACT FORM

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = contactForm.name.value;
        const phone = contactForm.phone.value;
        const service = contactForm.service.value;
        const message = contactForm.message.value;

        const whatsappMessage =
            `Hello OJ MAX Autos.%0A%0A` +
            `Name: ${name}%0A` +
            `Phone: ${phone}%0A` +
            `Service: ${service}%0A` +
            `Message: ${message}`;

        formMessage.innerHTML =
            "Thank you! Redirecting you to WhatsApp...";

        setTimeout(() => {

            window.open(
                `https://wa.me/2347059753597?text=${whatsappMessage}`,
                "_blank"
            );

        }, 800);

    });

}


// VEHICLE DETAILS

const vehicles = {

    "luxury-suv": {

        title: "Luxury Executive SUV",

        image: "assets/car1.jpg",

        description:
            "Experience premium transportation with our luxury executive SUV. Perfect for VIP guests, executives, families and special occasions."

    },

    "executive-sedan": {

        title: "Executive Sedan",

        image: "assets/car2.jpg",

        description:
            "Elegant executive sedan designed for corporate meetings, business travel and premium city transportation."

    },

    "vip-suv": {

        title: "Premium VIP SUV",

        image: "assets/car3.jpg",

        description:
            "A spacious premium SUV designed for VIP guests, family transportation and special occasions."

    },

    "luxury-sedan": {

        title: "Luxury Business Sedan",

        image: "assets/car4.jpg",

        description:
            "A refined luxury sedan for executive movements, corporate transportation and business travel."

    },

    "vip": {

        title: "VIP Transportation Vehicle",

        image: "assets/car5.jpg",

        description:
            "Premium transportation designed to provide comfort, privacy and style for VIP clients."

    },

    "chauffeur": {

        title: "Premium Chauffeur Vehicle",

        image: "assets/car6.jpg",

        description:
            "A comfortable premium vehicle available with our professional chauffeur service."

    }

};


const params = new URLSearchParams(window.location.search);

const selectedCar = params.get("car");

if (selectedCar && vehicles[selectedCar]) {

    const vehicle = vehicles[selectedCar];

    const title = document.getElementById("detailTitle");
    const image = document.getElementById("detailImage");
    const description = document.getElementById("detailDescription");
    const bookButton = document.getElementById("bookCar");

    if (title) title.textContent = vehicle.title;

    if (image) {

        image.src = vehicle.image;
        image.alt = vehicle.title;

    }

    if (description) {
        description.textContent = vehicle.description;
    }

    if (bookButton) {

        const text =
            `Hello OJ MAX Autos, I am interested in booking the ${vehicle.title}.`;

        bookButton.href =
            `https://wa.me/2347059753597?text=${encodeURIComponent(text)}`;

    }

}


// SCROLL ANIMATION

const animatedElements =
    document.querySelectorAll(
        ".feature-card, .service-box, .car-card"
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

        },
        {
            threshold: .1
        }
    );


animatedElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "all .7s ease";

    observer.observe(element);

});
/* =========================================
   OJ MAX AUTOS MOBILE NAVIGATION
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {
            mainNav.classList.toggle("show");

            if (mainNav.classList.contains("show")) {
                menuToggle.innerHTML = "✕";
            } else {
                menuToggle.innerHTML = "☰";
            }
        });

        // Close menu after clicking a navigation link
        const navLinks = mainNav.querySelectorAll("a");

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                mainNav.classList.remove("show");
                menuToggle.innerHTML = "☰";
            });
        });

    }

});
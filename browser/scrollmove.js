window.addEventListener("DOMContentLoaded", () => {

    window.addEventListener("scroll", () => {

        let box = document.getElementById("box");

        let radius = window.scrollY % 100;

        box.style.transform = `translateY(${window.scrollY * 0.5}px)`;
        box.style.borderRadius = `${radius}px`;

    });

});
console.log("A little something for you.");
document.addEventListener("DOMContentLoaded", () => {

    const flowers = document.querySelectorAll(".flower");

    flowers.forEach((flower) => {
        flower.addEventListener("animationend", () => {
            flower.classList.add("alive");
        });
    });

});

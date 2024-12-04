/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the elements
    const startBtn = document.getElementById("start-btn");
    const welcomePage = document.getElementById("welcome-page");
    const stay = document.getElementById("stay");
    const container = document.querySelector(".container");
    const scubaBtn = document.getElementById('scuba-btn');
    const freeBtn = document.getElementById('free-btn');

        // Add a click event listener to the Start button
    startBtn.addEventListener("click", function () {
        welcomePage.style.display = "none";
        stay.style.display = "block";
        container.style.display = "block";
    });

        
});


/* =========================================
   CRISTO COBOS — PORTFOLIO
   INTERACTIVITY
   ========================================= */


/* =========================================
   THEME TOGGLE
   ========================================= */

const themeToggle = document.getElementById("theme-toggle");


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");


    if (document.body.classList.contains("light-mode")) {

        themeToggle.textContent = "☾";

    } else {

        themeToggle.textContent = "☀";

    }

});


/* =========================================
   LANGUAGE TOGGLE
   ========================================= */

const languageToggle =
    document.getElementById("language-toggle");


let currentLanguage = "es";


languageToggle.addEventListener("click", () => {

    currentLanguage =
        currentLanguage === "es"
            ? "en"
            : "es";


    /* Change button text */

    languageToggle.textContent =
        currentLanguage === "es"
            ? "EN"
            : "ES";


    /* Change page language */

    document.documentElement.lang =
        currentLanguage;


    /* Translate elements */

    document
        .querySelectorAll("[data-es]")
        .forEach(element => {

            element.textContent =
                element.dataset[currentLanguage];

        });

});
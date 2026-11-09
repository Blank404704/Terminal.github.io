// Varibles
const DARK_STYLESHEET = "./Assets/Stylesheets/style.css";
const LIGHT_STYLESHEET = "./Assets/Stylesheets/style-light.css";

const stylesheet = document.getElementById("site-stylesheet");
const modeSwitcher = document.getElementById("dl-mode-switcher");

// Script for switching between dark and light modes
if (stylesheet && modeSwitcher) {
    // Lisening event for the mode-switch button
    modeSwitcher.addEventListener("click", () => {
        // Check whether the light mode stylesheet is currently active
        const isLightMode = stylesheet.getAttribute("href") === LIGHT_STYLESHEET;

        // Replace the current stylesheet path with the other mode
        stylesheet.setAttribute("href", isLightMode ? DARK_STYLESHEET : LIGHT_STYLESHEET);

        // Update the button label
        modeSwitcher.textContent = isLightMode ? "Switch to light mode" : "Switch to dark mode";

        // accessibility(Why? IDK)
        modeSwitcher.setAttribute("aria-pressed", String(!isLightMode));
    });
}
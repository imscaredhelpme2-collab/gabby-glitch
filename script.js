const glitches = [
    {
        name: "MEMORY_FRAGMENT",
        message: "I found something I don't remember creating."
    },

    {
        name: "SYSTEM_DESYNC",
        message: "Something feels slightly out of sync."
    },

    {
        name: "DREAM_MODE",
        message: "I think I was dreaming."
    },

    {
        name: "UNKNOWN_SIGNAL",
        message: "A signal appeared from nowhere."
    },

    {
        name: "CORRUPTED_MEMORY",
        message: "A memory file was damaged."
    }
];


// Pick random glitch
let chosenGlitch =
glitches[Math.floor(Math.random() * glitches.length)];


// Put information into HTML
document.getElementById("glitch-name").textContent =
chosenGlitch.name;


document.getElementById("glitch-message").textContent =
chosenGlitch.message;


document.getElementById("glitch-time").textContent =
new Date();

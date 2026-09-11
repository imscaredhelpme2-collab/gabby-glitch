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


let glitch = glitches[Math.floor(Math.random() * glitches.length)];


document.getElementById("glitchName").innerHTML =
glitch.name;


document.getElementById("glitchMessage").innerHTML =
glitch.message;


document.getElementById("time").innerHTML =
new Date();


    setInterval(function(){

    document.getElementById("status").innerHTML =
    messages[Math.floor(Math.random()*messages.length)];

    },2000);
]

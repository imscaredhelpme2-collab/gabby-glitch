let messages = [

    "RECOVERING MEMORY...",
    "SEARCHING...",
    "UNKNOWN PROCESS RUNNING...",
    "GABBY ONLINE",
    "ERROR DETECTED"

    ];


    setInterval(function(){

    document.getElementById("status").innerHTML =
    messages[Math.floor(Math.random()*messages.length)];

    },2000);
]

from flask import Flask, render_template
import random
import datetime

app = Flask(__name__)


glitches = [
        {
                    "name": "MEMORY_FRAGMENT",
                            "message": "I found something I don't remember creating.",
                                    "type": "memory"
        },

            {
                        "name": "SYSTEM_DESYNC",
                                "message": "Something feels slightly out of sync.",
                                        "type": "error"
            },

                {
                            "name": "DREAM_MODE",
                                    "message": "I think I was dreaming.",
                                            "type": "dream"
                },

                    {
                                "name": "UNKNOWN_SIGNAL",
                                        "message": "A signal appeared from nowhere.",
                                                "type": "unknown"
                    },

                        {
                                    "name": "CORRUPTED_MEMORY",
                                            "message": "A memory file was damaged.",
                                                    "type": "corrupt"
                        }
]


@app.route("/")
def glitch():

        chosen = random.choice(glitches)

            time = datetime.datetime.now()

                return render_template(
                            "glitch.html",
                                    glitch=chosen,
                                            time=time
                )


                if __name__ == "__main__":
                        app.run(debug=True)
                )
                        }
                    }
                }
            }
        }
]
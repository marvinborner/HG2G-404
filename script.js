particlesJS("starBackground", {
    "particles": {
        "number": {
            "value": 355,
            "density": {
                "enable": true,
                "value_area": 789.1476416322727
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.48927153781200905,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 0.2,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 2,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 0.2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 83.91608391608392,
                "size": 1,
                "duration": 3,
                "opacity": 1,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

/*
    Whale Partyy!
 */
const whaleDialog =
    "Aaaahhhhhhhhh! Wooooooooooh!\n" +
    "\n" +
    "What's happening?\n" +
    "\n" +
    "Who am I?\n" +
    "\n" +
    "Why am I here? What’s my purpose in life?\n" +
    "\n" +
    "What do I mean by who am I?\n" +
    "\n" +
    "Okay, okay, calm down and get a grip now. Ooh, that is an interesting sensation. What is it? It’s a sort of tingling in my - well I suppose I better start finding names for things. Let's call it a tail! Yeah, tail!\n" +
    "\n" +
    "And hey, what’s this roaring sound whooshing past what I’m suddenly going to call my head? Wind! Is that a good name? It’ll do.\n" +
    "\n" +
    "Yeah, this is really exciting. I’m dizzy with anticipation!\n" +
    "\n" +
    "Or is it the wind?\n" +
    "\n" +
    "Theres an awful lot of that now isn’t it?\n" +
    "\n" +
    "And what’s this thing suddenly coming towards me very fast? So big and flat and round, it needs a big wide sounding name like 'ow', 'ownge', 'round', 'ground'! That’s it! Ground! Ha!\n" +
    "\n" +
    "I wonder if it will be friends with me? Hello Ground!\n";
const flowerPotDialog = "Oh no, not again...";
const timeout = 20000;

setTimeout(() => {
    generateObject();
    setInterval(() => {
        generateObject()
    }, timeout)
}, timeout);

function generateObject() {
    let whale = document.getElementById("whaleParty");
    let petuniaBowl = document.getElementById("petuniaBowlParty");
    let randomLeftOffset = Math.floor(Math.random() * 70) + 1,
        randomSelector = Math.floor(Math.random() * 2) + 1,
        current,
        newObject;

    if (randomSelector === 1) {
        current = whale;
        speak(whaleDialog);
        console.log(whaleDialog);
    } else {
        current = petuniaBowl;
        speak(flowerPotDialog);
        console.log(flowerPotDialog);
    }
    newObject = current.cloneNode(true);
    current.parentNode.replaceChild(newObject, current);
    newObject.classList.add("dropObject");
    newObject.style.left = randomLeftOffset.toString() + "%";
}

function speak(message) {
    const msg = new SpeechSynthesisUtterance(message);
    const voices = window.speechSynthesis.getVoices();
    msg.voice = voices[0];
    window.speechSynthesis.speak(msg)
}

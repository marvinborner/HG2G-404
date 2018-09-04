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
const timeout = 10000;
const whaleDialog =
    "Ah … ! What’s happening? it thought.\n" +
    "\n" +
    "Er, excuse me, who am I?\n" +
    "\n" +
    "Hello?\n" +
    "\n" +
    "Why am I here? What’s my purpose in life?\n" +
    "\n" +
    "What do I mean by who am I?\n" +
    "\n" +
    "Calm down, get a grip now … oh! this is an interesting sensation, what is it? It’s a sort of … yawning, tingling sensation in my … my … well I suppose I’d better start finding names for things if I want to make any headway in what for the sake of what I shall call an argument I shall call the world, so let’s call it my stomach.\n" +
    "\n" +
    "Good. Ooooh, it’s getting quite strong. And hey, what’s about this whistling roaring sound going past what I’m suddenly going to call my head? Perhaps I can call that … wind! Is that a good name? It’ll do … perhaps I can find a better name for it later when I’ve found out what it’s for. It must be something very important because there certainly seems to be a hell of a lot of it. Hey! What’s this thing? This … let’s call it a tail – yeah, tail. Hey! I can can really thrash it about pretty good can’t I? Wow! Wow! That feels great! Doesn’t seem to achieve very much but I’ll probably find out what it’s for later on. Now – have I built up any coherent picture of things yet?\n" +
    "\n" +
    "No.\n" +
    "\n" +
    "Never mind, hey, this is really exciting, so much to find out about, so much to look forward to, I’m quite dizzy with anticipation …\n" +
    "\n" +
    "Or is it the wind?\n" +
    "\n" +
    "There really is a lot of that now isn’t it?\n" +
    "\n" +
    "And wow! Hey! What’s this thing suddenly coming towards me very fast? Very very fast. So big and flat and round, it needs a big wide sounding name like … ow … ound … round … ground! That’s it! That’s a good name – ground!\n" +
    "\n" +
    "I wonder if it will be friends with me?\n" +
    "\n" +
    "And the rest, after a sudden wet thud, was silence.";
const flowerPotDialog = "Not again...";

setTimeout(() => {
    let whale = document.getElementById("whaleParty");
    whale.classList.add("dropWhale");
    console.log(whaleDialog);
    setInterval(() => {
        let randomNumber = Math.floor(Math.random() * 70) + 1;
        whale = document.getElementById("whaleParty"); // update
        whale.style.left = randomNumber.toString() + "%";
        const newWhale = whale.cloneNode(true);
        whale.parentNode.replaceChild(newWhale, whale);
    }, timeout);
}, timeout);

import * as vanillaTilt from "https://cdn.skypack.dev/vanilla-tilt@1.7.0";

VanillaTilt.init(document.querySelector(".container"), {
		max: 25,
		speed: 300,
    glare: true,
    "max-glare": 0.2, 
	});
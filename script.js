window.addEventListener("load", () => {

	const sounds = document.querySelectorAll(".sounds");
	const pads = document.querySelectorAll(".pads div");
	const visual = document.querySelector(".visual");
	const colors = [

		"red",
		"blue",
		"green",
		"yellow",
		"purple",
		"gray"
	];

	pads.forEach((pad,index) => {
		

		pad.addEventListener("click", function(){

			sounds[index].currentTime = 0;
			sounds[index].play();
			createBubbles(index);
		})

	})

	//Creating bubbles
	const createBubbles = (index) =>{

		const bubble= document.createElement("div");
		visual.appendChild(bubble);
		bubble.style.backgroundColor = colors[index];
		bubble.style.animation = 'jump 1s ease';
		bubble.addEventListener("click", function() {
			visual.removeChild(bubble);
		})
	}
	
})
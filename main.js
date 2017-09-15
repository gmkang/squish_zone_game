var jq = $(function(){
	console.log("JS OKAY!");

var body = $('body');
var timeLeft = 45;
var score = 0;



function createAnt() { 
 	// var ant = document.createElement('div').
 	// 	ant.setAttribute('class', 'ants');
		// body.appendChild(ant);

	var ant = $('<div class="ants"></div>');
		body.append(ant);

			ant.css("left", Math.random() * window.innerWidth);

		setInterval(function() {
			ant.css("left", Math.random() * window.innerWidth);
			}, 1500)

			// attach listener here!
			ant.click(squishAnts);
			// ant.on("click", function(){
			// 	ant.css("left", "");
			// })
}
createAnt();



function createFly() {
	var fly = $('<div class="flies"></div>');
		body.append(fly);

		fly.css("top", Math.random() * window.innerHeight);
		fly.css("left", Math.random() * window.innerWidth);

		setInterval(function() {
			fly.css("top", Math.random() * window.innerHeight);
			fly.css("left", Math.random() * window.innerWidth);
		}, 300)
			fly.on("click", function() {
				fly.css("top", ""); 
				fly.css("left", "");
			})

			fly.click(squishFlies);

			// if(score === 60 || score === 65 || score === 160) {
			// 	activateBugSpray();
			// }

	// var fly = document.createElement('div');
	// fly.setAttribute('class', 'flies');
		
	// document.body.appendChild(fly);

	// 	fly.style.top = Math.random() * window.innerHeight;
	// 	fly.style.left = Math.random() * window.innerWidth;

	// 		setInterval(function(){
	// 		fly.style.top = Math.random() * window.innherHeight;
	// 		fly.style.left = Math.random() * window.innerWidth;
	// 	}, 400)	
}
createFly();

	// for(var i = 0; i < 3; i++) {
	// 	createAnt();
	// 	createFly();
	// }
	
var timerId = setInterval(startTimer, 1000);

function startTimer() {
  
	var timer = document.getElementById('timer');

		if(timeLeft === 0) {
		  setTimeout(function(){
		  		alert('Time\'s Up!');
		  	},1000);
		  clearTimeout(timerId);
		} else {
		  timer.innerHTML = `00:${timeLeft}`; 
		  	if (timeLeft < 10) {
		  		timer.innerHTML = `00:0${timeLeft}`; 
		  	}
		  timeLeft --;
	}
}
startTimer();



function squishFlies(event) {
		// var x = event.clientX;
		// var y = event.clientY;

		score+=10;
		console.log(score);
		scoreboard();
		// console.log(this)
		var squish = event.currentTarget.classList;
		squish.add('splat');
		// event.target.style.top = y + "px";
		// event.target.style.left = x + "px";
		// console.log(this)
		
		// console.log(x);
		// console.log(y);


		setInterval(function(){
			squish.remove('flies');
		},1000)
		
}		



function squishAnts(event) {
	score+=5;
	console.log(score);
	scoreboard();

	var squish = event.currentTarget.classList;
	squish.add('squished');

	setInterval(function() {
		squish.remove('ants');
	},1000)
	
}



	setInterval(bugSwarm, 15000);

function bugSwarm(){
	
	for (var i = 0; i < 5; i++) {
		createAnt();
		createFly();
	}
}
	setTimeout(function(){
		clearInterval(bugSwarm, 30000)
	})






function scoreboard(){
	var scoreboard = document.getElementById('scoreboard');
	scoreboard.innerHTML = `${score}pts.`

		// if(score === 60) {
		// 	alert('ACTIVATE BUG SPRAY!')
		// }
}
scoreboard();


function bugSpray() {
	// 
	console.log(score)
	
	if (score === 60 || score === 160) {
		var prize = $('<img src="prize1.png" id="bugspray">')
		body.append(prize);
			prize.show("slow");
			prize.hide('fast');
	}
}

	function activateBugSpray(){
	
	// var ants = document.querySelectorAll('.ants');
	// var flies = document.querySelectorAll('.flies');

	if (event.keyCode === 32) {
		document.removeEventListener("click", squishFlies);
		document.removeEventListener("click", squishAnts);
		

		document.addEventListener("mouseover", squishFlies)
		// 	var killFly = event.currentTarget.classList;
		// 		killFly.add('splat')
		// });


		document.addEventListener("mouseover", squishAnts)
		// 	var killAnt = event.currentTarget.classList;
		// 		killAnt.add('squished')
		// });

		}
		
		//change EVENT LISTENER PROPERTIES! MOUSEOVER CURSOR TOO
	}

	document.onkeypress = activateBugSpray;






















});
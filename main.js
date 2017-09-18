// var jq = 
$(function() {
    console.log("JS OKAY!");

    var body = $('body');
    var flies = $('.flies');
    var ants = $('.ants');
    var timeLeft = 45;
    var score = 0;


  $('#instructions').click(function(){
  	$('#drop_down').slideToggle('slow'); 
  });


    function createAnt() {

        var ant = $('<div class="ants"></div>');
        body.append(ant);

        ant.css("left", Math.random() * window.innerWidth);

        var intervalId = setInterval(function() {
            ant.css("left", Math.random() * window.innerWidth);
        }, 1500)

        // attach listener here!
        ant.click({ intervalId: intervalId }, squishAnts);

        if (score >= 100) {
            ant.mouseover({ intervalId: intervalId }, squishAnts);
        }
        // 	bugSpray();
        // 	activateBugSpray();
        // }


    }
    createAnt();



    function createFly() {

        var fly = $('<div class="flies"></div>');
        body.append(fly);

        fly.css("top", Math.random() * window.innerHeight);
        fly.css("left", Math.random() * window.innerWidth);

        var intervalId = setInterval(function() {
            fly.css("top", Math.random() * window.innerHeight);
            fly.css("left", Math.random() * window.innerWidth);
        }, 300)


        fly.click({ intervalId: intervalId }, squishFlies);

        if (score >= 100) {
            fly.mouseover({ intervalId: intervalId }, squishFlies);
        }

    }
    createFly();

    for (var i = 0; i < 4; i++) {
        createAnt();
        createFly();
    }

    var timerId = setInterval(startTimer, 1000);

    function startTimer() {

        var timer = document.getElementById('timer');

        if (timeLeft === 0) {
            setTimeout(function() {
                alert('Time\'s Up! Better call a terminator!');
            }, 1000);
            clearTimeout(timerId);
        } else {
            timer.innerHTML = `00:${timeLeft}`;
            if (timeLeft < 10) {
                timer.innerHTML = `00:0${timeLeft}`;
            }
            timeLeft--;
        }
    }
    startTimer();



    function squishFlies(event) {

        score += 10;
        console.log(score);
        scoreboard();
        
        var squish = event.currentTarget.classList;
        squish.add('splat');
        console.log('in squishFlies. event.data:', event.data);
        clearInterval(event.data.intervalId);

        setInterval(function() {
            squish.remove('flies');
            checkWinner();
        }, 1000)

    }



    function squishAnts(event) {

        score += 5;
        console.log(score);
        scoreboard();

        var squish = event.currentTarget.classList;
        squish.add('squished');
        clearInterval(event.data.inervalId);

        setInterval(function() {
            squish.remove('ants');
            checkWinner();
        }, 1000)

    }



    setInterval(bugSwarm, 25000);

    function bugSwarm() {

        for (var i = 0; i < 12; i++) {
            createAnt();
            createFly();
        }
    }


    function stopBugSwarm() {
        clearInterval(createAnt);
        clearInterval(createFly);
    }
    setInterval(stopBugSwarm, 30000)



    function scoreboard() {

        var scoreboard = document.getElementById('scoreboard');
        scoreboard.innerHTML = `${score}pts.`
        if (score >= 100) {
            bugSpray();
        }
    }
    scoreboard();


    function removeBugSpray() {
        clearInterval(activateBugSpray);
    }


    function bugSpray() {

        if (score >= 100) {
            var prize = $('<img src="images/prize1.png" id="bugspray">')
            body.append(prize);
            prize.show();
        }
    }
    bugSpray();



    function activateBugSpray() {


        if (event.keyCode === 32) {



            $('.flies').on("mouseleave", squishFlies);
            setInterval(function(){
            	remove(flies)
            }, 1000)

            $('.ants').on("mouseover", squishAnts);
            setInterval(function(){
            	remove(ants)
            }, 1000)

            $('.flies').off("click", squishFlies);
            $('.ants').off("click", squishAnts);


        }

        document.onmousemove = animateSpray;

    }

    document.onkeypress = activateBugSpray;


    function animateSpray(event) {
        var spray = document.createElement('div');
        spray.setAttribute('class', 'spray');
        document.body.appendChild(spray);

        spray.style.left = event.clientX + "px"
        spray.style.top = event.clientY + "px"

        spray.style.transition = "all 0.5s linear 0s"

        spray.style.width = "20px";
        spray.style.height = "20px";
        spray.style.left = spray.offsetLeft - 20 + 'px';
        spray.style.top = spray.offsetTop - 20 + 'px';
        spray.style.borderWidth = "5px";
        spray.style.opacity = 0;
    }


    function checkWinner() {

    		if(timeLeft > 0) {
    			if($('.flies').length === 0 && $('.ants').length === 0) {
    				alert('YAY! Your home is bug free!');
    			} 
    		}
		}
clearInterval(checkWinner);

















});
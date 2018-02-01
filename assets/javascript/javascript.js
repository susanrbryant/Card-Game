

var playerLostTotal = 0;
var playerWinTotal = 0;
var playerCounterScore = 0;
var btnRandomNum = 0;


$(document).ready(function() {
	
	 
	/*********************
	 RETURNS A RANDOM NUMBER
	*********************/
	function getGameRandomNum(max, min) {
		var aRandomNum = Math.floor(Math.random() * (max - min + 1)) + min;
		return aRandomNum
	};


	var gameRandomNum = getGameRandomNum(120, 19); // holds GAME'S RANDOM NUMBER - 19 - 120
	
	
	$("#game-random-num").text(gameRandomNum);
	
	
	// Set initialize elements	
	$("#win-total").text(playerWinTotal);
	$("#lost-total").text(playerLostTotal);
	$("#player-counter-score").text(playerCounterScore);
	

	// On click events for each button
    $("#btn1").on( "click", function() {
		btnRandomNum = getGameRandomNum(12, 1); // holds the CARD'S RANDOM NUMBER - 1 - 12
		addToPlayerCounterScore(btnRandomNum);
		
		$("#btnCard1").css({visibility: "hidden"}).fadeOut("slow");
		
		$(".btnNumber1").text(btnRandomNum).css({visibility: "visible"}).fadeIn("slow");

		setTimeout(function() {
			$(".btnNumber1").css({visibility: "hidden"}).fadeOut("slow");
			$("#btnCard1").css({visibility: "visible"}).fadeIn("slow");
		}, 1500);

    });
	
	
    $("#btn2").on( "click", function() {
		btnRandomNum = getGameRandomNum(12, 1);
		addToPlayerCounterScore(btnRandomNum);
		
		$("#btnCard2").css({visibility: "hidden"}).fadeOut("slow");
		
		$(".btnNumber2").text(btnRandomNum).css({visibility: "visible"}).fadeIn("slow");
		
		setTimeout(function() {
			$(".btnNumber2").css({visibility: "hidden"}).fadeOut("slow");
			$("#btnCard2").css({visibility: "visible"}).fadeIn("slow");
		}, 1500);
		
    });
	
	
    $("#btn3").on( "click", function() {
		btnRandomNum = getGameRandomNum(12, 1);
		addToPlayerCounterScore(btnRandomNum);
		
		$("#btnCard3").css({visibility: "hidden"}).fadeOut("slow");
		
		$(".btnNumber3").text(btnRandomNum).css({visibility: "visible"}).fadeIn("slow");
		
		setTimeout(function() {
			$(".btnNumber3").css({visibility: "hidden"}).fadeOut("slow");
			$("#btnCard3").css({visibility: "visible"}).fadeIn("slow");
		}, 1500);
		
    });
	
	
    $("#btn4").on( "click", function() {
		btnRandomNum = getGameRandomNum(12, 1);
		addToPlayerCounterScore(btnRandomNum);
		
		$("#btnCard4").css({visibility: "hidden"}).fadeOut("slow");
		
		$(".btnNumber4").text(btnRandomNum).css({visibility: "visible"}).fadeIn("slow");
		
		setTimeout(function() {
			$(".btnNumber4").css({visibility: "hidden"}).fadeOut("slow");
			$("#btnCard4").css({visibility: "visible"}).fadeIn("slow");
		}, 1500);
		
    });
	

	/*********************
	 START GAME
	*********************/
	function startGame() {
		
		gameRandomNum = getGameRandomNum(120, 19);
		// Resets
		$("#game-random-num").text(gameRandomNum);
	
		playerCounterScore = 0;
		$("#player-counter-score").text(playerCounterScore);
			
		//console.log( "Clicked [btn1]" + btnRandomNum);	
		
	};


	/*********************
	 ADD TO PLAYER COUNTER SCORE - CHECK for WIN, LOSE or keep PLAYING
	*********************/
	function addToPlayerCounterScore(btnNum) {
		
		playerCounterScore += btnNum;
		
		if (playerCounterScore === gameRandomNum) {
			// WIN
			
			playerWinTotal += 1;
			
			$("#win-total").text(playerWinTotal);
			
			$("#player-counter-score").text("You WIN!");

			setTimeout(function() {
				startGame();
			}, 2000); // Show Message for 2 seconds		

		} else if (playerCounterScore > gameRandomNum) {
			
			// LOST 
			playerLostTotal += 1;
			
			$("#lost-total").text(playerLostTotal);
			
			$("#player-counter-score").text("You LOST!");
			
			setTimeout(function() {
				startGame(); // Show Message for 2 seconds	
			}, 2000);
	
		} else {
			
			// KEEP PLAYING
			$("#player-counter-score").text(playerCounterScore);

		};
		
	};

});



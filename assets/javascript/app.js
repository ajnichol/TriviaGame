//loads everything below after html is loaded
$(document).ready(function() {
	//this is our trivia game object
	var triviaGame = {

		correctAnswers: 0,
		wrongAnswers: 0,
		unanswered: 0,
		time: 60,
		setIntervalId: null,
		//this sets our timer interval to one second and uses the startGame method as a delegate
		interval: function() {

			$(".hideButton").hide();
			setIntervalId = setInterval(this.startGame, 1000);
			$("#timeRemaining").html(this.time);
		},
		//this method decreases our game time from 60 by an interval of one second
		startGame: function() {
			//once timer reaches zero the stop game method is called
			triviaGame.time--;
			$("#timeRemaining").html(triviaGame.time);
			if (triviaGame.time === 0) {
				triviaGame.stopGame();
			};
		},
		//here is where we check if the user checked the right or wrong box as well as if they didnt check a box at all. 
		stopGame: function() {
			//redundancy anyone? 
			if ( $("#correct1").is(":checked")) {
				this.correctAnswers++;
				$("#correctAnswers").html(this.correctAnswers);
			}
			else if ( $("#wrong1").is(":checked")){
				this.wrongAnswers++;
				$("#wrongAnswers").html(this.wrongAnswers);
			}
			else if ( $("#wrong2").is(":checked")){
				this.wrongAnswers++;
				$("#wrongAnswers").html(this.wrongAnswers);
			}
			else if ( $("#wrong3").is(":checked")){
				this.wrongAnswers++;
				$("#wrongAnswers").html(this.wrongAnswers);
			}

			if ( $("#correct2").is(":checked")) {
				this.correctAnswers++;
				$("#correctAnswers").html(this.correctAnswers);
			}
			else if ( $("#wrong4").is(":checked")){
				this.wrongAnswers++;
				$("#wrongAnswers").html(this.wrongAnswers);
			}
			else if ( $("#wrong5").is(":checked")){
				this.wrongAnswers++;
				$("#wrongAnswers").html(this.wrongAnswers);
			}
			else if ( $("#wrong6").is(":checked")){
				this.wrongAnswers++;
				$("#wrongAnswers").html(this.wrongAnswers);
			}

			if ( $("#correct3").is(":checked")) {
				this.correctAnswers++;
				$("#correctAnswers").html(this.correctAnswers);
			}
			else if ( $("#wrong7").is(":checked")){
				this.wrongAnswers++;
				$("#wrongAnswers").html(this.wrongAnswers);
			}
			else if ( $("#wrong8").is(":checked")){
				this.wrongAnswers++;
				$("#wrongAnswers").html(this.wrongAnswers);
			}
			else if ( $("#wrong9").is(":checked")){
				this.wrongAnswers++;
				$("#wrongAnswers").html(this.wrongAnswers);
			}

			if ( $("#correct4").is(":checked")) {
				this.correctAnswers++;
				$("#correctAnswers").html(this.correctAnswers);
			}
			else if ( $("#wrong10").is(":checked")){
				this.wrongAnswers++;
				$("#wrongAnswers").html(this.wrongAnswers);
			}
			else if ( $("#wrong11").is(":checked")){
				this.wrongAnswers++;
				$("#wrongAnswers").html(this.wrongAnswers);
			}
			else if ( $("#wrong12").is(":checked")){
				this.wrongAnswers++;
				$("#wrongAnswers").html(this.wrongAnswers);
			}

			if( $(".group1").is(":checked") === false) {
				this.unanswered++;
				$("#unanswered").html(this.unanswered);
			};

			if( $(".group2").is(":checked") === false) {
				this.unanswered++;
				$("#unanswered").html(this.unanswered);
			};

			if( $(".group3").is(":checked") === false) {
				this.unanswered++;
				$("#unanswered").html(this.unanswered);
			};

			if( $(".group4").is(":checked") === false) {
				this.unanswered++;
				$("#unanswered").html(this.unanswered);
			};

			$(".results").show();
			$(".timer").hide();
			$(".hideQuestions").hide();
		
		},

	};
	//this is the button that starts the whole game
	$("#start-game").on("click", function() {

		triviaGame.interval();
		$(".hideQuestions").show();
		$(".timer").show();
		
	});
	//here we make sure only one checkbox is able to be checked
	$('input[type="checkbox"]').on('change', function() {

    	$('input[name="' + this.name + '"]').not(this).prop('checked', false);

	});

});
//loads everything below after html is loaded
$(document).ready(function() {

	var triviaGame = {

		correctAnswers: 0,
		incorrectAnswers: 0,
		unanswered: 0,
		time: 60,
		setIntervalId: null,

		interval: function() {

			$(".hideButton").hide();
			setIntervalId = setInterval(this.startGame, 1000);
			$("#timeRemaining").html(this.time);
		},

		startGame: function() {

			triviaGame.time--;
			$("#timeRemaining").html(triviaGame.time);
			if (triviaGame.time === 0) {
				triviaGame.stopGame();
			}
		},

		stopGame: function() {

			if( $(".group1").is(":checked") === false) {
				this.unanswered++;
				$("#unanswered").html(this.unanswered);
			}

			if( $(".group2").is(":checked") === false) {
				this.unanswered++;
				$("#unanswered").html(this.unanswered);
			}

			if( $(".group3").is(":checked") === false) {
				this.unanswered++;
				$("#unanswered").html(this.unanswered);
			}

			if( $(".group4").is(":checked") === false) {
				this.unanswered++;
				$("#unanswered").html(this.unanswered);
			}

			$(".results").show();
			$(".timer").hide();
			$(".hideQuestions").hide();
		
		},

	};

	$("#start-game").on("click", function() {

		triviaGame.interval();
		$(".hideQuestions").show();
		$(".timer").show();
		
	});

	$('input[type="checkbox"]').on('change', function() {

    	$('input[name="' + this.name + '"]').not(this).prop('checked', false);

	});

});
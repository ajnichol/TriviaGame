//loads everything below after html is loaded
$(document).ready(function() { 

	var triviaGame = {

		correctAnswers: 0,
		incorrectAnswers: 0,
		unanswered: 0,

		startGame: function() {


		},

		stopGame: function() {

		},
	};

	$("#startGame").on("click", function() {

		$(".hideQuestions").show();

		$(".hideButton").hide();

		triviaGame.startGame();

	});

	$('input[type="checkbox"]').on('change', function() {

    $('input[name="' + this.name + '"]').not(this).prop('checked', false);
    
	});

});
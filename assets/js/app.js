//Have the answers been submitted?
var finished = false;

//Timer set to start at 300 seconds (3 minutes)
var timer;
$(".countdown").text("Time Remaining: " + timer + " seconds");

var interval;

//Ready document 
$(document).ready(function() {
	//when document opens show start button
 	$(".countdown").html("<button> Click here to start </button>")

 	//Disable answer
 	$("input").prop("disabled", true);

 	//Run function when start button is clicked
 	$(".countdown").on("click", function() {
	
		timer = 5;
		//Show timer
		$(".countdown").html('<h3>Time Remaining: ' + timer + ' seconds');

		//enable answers
		$("input").prop("disabled", false);

		beginTimer();

		//Show results when answers are submitted
		$("#sync").on("click", function() {
			showResults();
		});

 	});

});

//Definition of Functions
//-----------------------------------------------//
function beginTimer() {
	interval = setInterval(decrease, 1000);
}


function decrease() {
	//decrease timer by 1 second
	timer--;

	//Update time left in countdown section
	$(".countdown").html("Time Remaining: " + timer + " seconds");

	//Show results when time runs out
	if (timer === 0) {

		showResults();
	}
}

// REVISE SHOWRESULTS
//DEFINE SHOWRESULTS BY CHANGING HTML TO NEW SCREEEN CREATED THROUGH JQEARY
function showResults() {
	$(".container").html('<h2>You are done.</h2> <br> <p>Correct answers: </p>' + correct + '<br> <p>Incorrect answers: </p>' + incorrect + '<p>Unanswered: </p>' + unanswered);
}

//TODO
//LOCK SCROLLING UNTIL START BUTTON IS CLICKED OR MAKE FONT SAME COLOR AS BACKGROUND
//RECORD SCORE FOR WINS, LOSSES AND UNDEFINED

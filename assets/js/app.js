var interval;
var timer = 300;

//Have the answers been submitted?
var finished = false;

//Score
var correct = 0;
var incorrect = 0;
var unanswered = 10;

//Timer set to start at 300 seconds (3 minutes)
$(".countdown").text("Time Remaining: " + timer + " seconds");


//Ready document 
$(document).ready(function() {
	// //when document opens show start button
 // 	$("#startButton").html("<button> Click here to start </button>")

 	//Hide answers section
 	$(".questionsSection").hide();

 	$(".countdown").hide();

 	//Run function when start button is clicked
 	$("#startButton").on("click", function() {

 		//hide start button
 		$("#startButton").hide();
		
		//Show timer
		$(".countdown").html('<h3>Time Remaining: ' + timer + ' seconds');

		$(".countdown").show();
		
		beginTimer();

		// Show answer Section
		$(".questionsSection").show();

		//Show results when answers are submitted
		$("#sync").on("click", function() {
			showResults();
			finished = true;
		});

 	});

});

//Definition of Functions
//-----------------------------------------------//
function decrease() {
	
	//allow function to run only once after beginTimer switches to true
	if (startTimer = true) {
		//decrease timer by 1 second
		timer--;

		//Update time left in countdown section
		$(".countdown").html("Time Remaining: " + timer + " seconds");

		//Show results when time runs out
		if (timer === 0) {

			showResults();
		}
	}
}

function beginTimer() {
	//reduces timer by one every second 
	interval = setInterval(decrease, 1000);
}

function showResults() {
	//collect value from each checked answer
	var result = $("input:checked").each(function(i,object) {
		console.log(i);
		console.log($(object).val());
		var isCorrect = $(object).val()
		
		//keeps track of correct and incorrect aswers
		if (isCorrect==="cor") {
			correct++;
		} else if (isCorrect==="inc") {
			incorrect++;
		}

		//determine how many questions quere unaswered
		var answered = correct + incorrect;	
		unanswered = 10 - parseInt(answered);
	});

	//replace html with new screen showing results
	$(".container").html('<div class="results"><h2>You are done!</h2> <br> <p>Correct answers: ' + correct + '</p> <br> <p>Incorrect answers: ' + incorrect + '</p> <br> <p>Unanswered: ' + unanswered + '</p></div>');
};

//TODO
//FIX TIMER

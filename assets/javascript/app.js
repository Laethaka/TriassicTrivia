//VARIABLES SETUP
var questionIndex = 0;
var answersCorrect = 0;
var answersWrong = 0;
var answersTimedOut = 0;
var timeLeft = 15;
var timer;
var timerRunning = false;

var questionArray = ['What dinosaur name means "fast thief?"', 'Which of the following dinosaurs had a giraffe-like neck?', 'What is the only dinosaur lineage to have survived the mass extinction?', 'How many claws did a velociraptor have on each hand?', 'What does "dinosaur" mean?', "What are the spikes on the end of a dinosaur's tail called?", 'An adult Stegosaurus had a brain the size of a... ?', 'Where was the velociraptor first discovered?'];
var answerArray = [['Nanotyrannus', 'Stegosaurus', 'Velociraptor', 'Pteronodon'], ['Ankylosaurus', 'Brachiosaurus', 'Allosaurus', 'Torvosaurus'], ['Snakes', 'Lizards', 'Frogs', 'Birds'], ['Four', 'Three', 'Two', 'One'], ['Terrible lizard', 'Hungry lizard', 'Killer lizard', 'Evil lizard'], ['Chevrons', 'Kothumus', 'Thagomizer', 'Spinalis capitis'], ['Small car', 'Basketball', 'Lime', 'M&M'], ['China', 'Pakistan', 'Mongolia', 'USA']];


function gameReset() { //GAMEPLAY SECTION
    $('#questionBar').text('Welcome... to Triassic Trivia!!').addClass('btn btn-warning btn-lg btn-block startButton').attr('type', 'button').removeAttr('style');
    $('#fourthAnswer').removeClass('btn btn-warning');
    $('.answerBar').addClass('invisible');

    $('.startButton').on('click', function() { //START BUTTON CLICKED
        $('#questionBar').removeClass('btn btn-warning btn-lg btn-block startButton').removeAttr('type')
        $('.startButton').off('click');
        $('.answerBar').addClass('btn btn-warning').removeClass('invisible');
        startNextQuestion();
    });

    $('.answerBar').on('click', function() {//ANSWER CLICK LISTENING
        if ($(this).attr('class') === 'answerBar btn btn-warning correctAnswer') { //CORRECT ANSWER CLICKED
            answersCorrect++;
            $('#reactionImage').attr('src', 'assets/images/correctImg.jpg').css('display','inline-block');
        } else { //WRONG ANSWER CLICKED
            answersWrong++;
            $('#reactionImage').attr('src', 'assets/images/incorrectImg.jpg').css('display', 'inline-block');
        }

    questionIndex++; //ITERATION
    $('#questionBar').css('display', 'none');
    $('.answerBar').css('display', 'none');  
    $('.correctAnswer').removeClass('correctAnswer'); //CLEAR CORRECT ANSWER MARKER
    clearInterval(timer);
    timerRunning = false;
        setTimeout (function() {
            startNextQuestion();
        }, 2000)
    });
};

//NEXT QUESTION REQUEST
function startNextQuestion() {
    if (questionIndex === 8) { //GAME OVER MAN GAME OVER
        questionIndex = 0;
        // clearInterval(timer);
        $('#reactionImage').css('display','none');
        $('.timeBar').addClass('invisible');
        $('#firstAnswer, #secondAnswer, #thirdAnswer').removeClass('btn btn-warning');
        $('#questionBar').css('display','block').text("All done! Here's how you did:");
        $('.answerBar').css('display','inline-block');
        $('#firstAnswer').text(`Correct answers: ${answersCorrect}`);
        $('#secondAnswer').text(`Incorrect answers: ${answersWrong}`);
        $('#thirdAnswer').text(`Questions timed out: ${answersTimedOut}`);
        answersCorrect = 0;
        answersWrong = 0;
        answersTimedOut = 0;
        $('#fourthAnswer').text('Play again!');
        $('.answerBar').off('click');
        $('#fourthAnswer').on('click', function() { //GAME RESTARTING
            $('#fourthAnswer').off('click');
            gameReset();
        })
    } else { //QUESTION & ANSWERS SETUP
        $('.timeBar').removeClass('invisible');
        timeLeft = 15;
        $('#timeLeft').text(timeLeft);
            if (!timerRunning) { //START TIMER
                timer = setInterval(timerTick, 1000);
                timerRunning = true;
            }
        $('#questionBar').css('display', 'block');
        $('#reactionImage').css('display', 'none');
        $('.answerBar').css('display', 'inline-block');
        $('#questionBar').text(questionArray[questionIndex]);
        $('#firstAnswer').text(answerArray[questionIndex][0]);
        $('#secondAnswer').text(answerArray[questionIndex][1]);
        $('#thirdAnswer').text(answerArray[questionIndex][2]);
        $('#fourthAnswer').text(answerArray[questionIndex][3]);
        switch (questionIndex) { //SETTING CORRECT ANSWER MARKERS
            case 0:
                $('#thirdAnswer').addClass('correctAnswer');
                break;  
            case 1:
                $('#secondAnswer').addClass('correctAnswer');
                break;
            case 2:
                $('#fourthAnswer').addClass('correctAnswer');
                break;
            case 3:
                $('#secondAnswer').addClass('correctAnswer');
                break;
            case 4:
                $('#firstAnswer').addClass('correctAnswer');
                break;
            case 5:
                $('#thirdAnswer').addClass('correctAnswer');
                break;
            case 6:
                $('#thirdAnswer').addClass('correctAnswer');
                break;
            case 7:
                $('#thirdAnswer').addClass('correctAnswer');
                break;
        };
    };
};

//TIMER ITERATION
function timerTick() {
    console.log('tick')
    timeLeft--;
    if (timeLeft==0) { //QUESTION TIMED OUT
        answersTimedOut++;
        $('#reactionImage').attr('src', 'assets/images/timesUp.jpg').css('display', 'inline-block');
        questionIndex++; //ITERATION
        $('#questionBar').css('display', 'none');
        $('.answerBar').css('display', 'none');  
        $('.correctAnswer').removeClass('correctAnswer'); //CLEAR CORRECT ANSWER MARKER
        clearInterval(timer);
        timerRunning = false;
            setTimeout (function() {
            startNextQuestion();
            }, 3500)
    }
    $('#timeLeft').text(timeLeft);
}

//GAME INITIALIZE
gameReset();
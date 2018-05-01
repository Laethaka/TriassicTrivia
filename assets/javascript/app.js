//VARIABLES SETUP
var questionIndex = 0;
var answersCorrect = 0;
var answersWrong = 0;
var answersTimedOut = 0;

var questionArray = ['What dinosaur name means "fast thief?"', 'Which of the following dinosaurs had a giraffe-like neck?', 'What is the only dinosaur lineage to have survived the mass extinction?', 'How many claws did a velociraptor have on each hand?', 'What does "dinosaur" mean?', "What are the spikes on the end of a dinosaur's tail called?", 'An adult Stegosaurus had a brain the size of a... ?', 'Where was the velociraptor first discovered?'];
var answerArray = [['Nanotyrannus', 'Stegosaurus', 'Velociraptor', 'Pteronodon'], ['Ankylosaurus', 'Brachiosaurus', 'Allosaurus', 'Torvosaurus'], ['Snakes', 'Lizards', 'Frogs', 'Birds'], ['Four', 'Three', 'Two', 'One'], ['Terrible lizard', 'Hungry lizard', 'Killer lizard', 'Evil lizard'], ['Chevrons', 'Kothumus', 'Thagomizer', 'Spinalis capitis'], ['Small car', 'Basketball', 'Lime', 'M&M'], ['China', 'Pakistan', 'Mongolia', 'USA']];


//INITIAL START BUTTON
$('#questionBar').text('Welcome... to Triassic Trivia!!').addClass('btn btn-warning btn-lg btn-block startButton').attr('type', 'button')

$('.startButton').on('click', function() { //START BUTTON CLICKED
    $('#questionBar').removeClass('btn btn-warning btn-lg btn-block startButton').removeAttr('type').off('click');
    $('.answerBar').addClass('btn btn-warning');
    startNextQuestion();
});

//NEXT QUESTION REQUEST
function startNextQuestion() {
    if (questionIndex === 8) { //GAME OVER MAN
        $('#firstAnswer, #secondAnswer, #thirdAnswer').removeClass('btn btn-warning');
        $('#questionBar').text("All done! Here's how you did:")
        $('#firstAnswer').text(`Correct answers: ${answersCorrect}`);
        $('#secondAnswer').text(`Incorrect answers: ${answersWrong}`);
        $('#thirdAnswer').text(`Answers timed out: ${answersTimedOut}`);
        $('#fourthAnswer').text('Play again!');
    } else { //QUESTION & ANSWERS SETUP
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
    questionIndex++; //ITERATION
};

$('.answerBar').on('click', function() {
    if ($(this).attr('class') === 'answerBar btn btn-warning correctAnswer') { //CORRECT ANSWER CLICKED
        answersCorrect++;
    } else { //WRONG ANSWER CLICKED
        if (questionIndex<9) {answersWrong++};
    }
    $('.correctAnswer').removeClass('correctAnswer'); //CLEAR CORRECT ANSWER MARKER
    startNextQuestion();
})
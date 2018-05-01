//VARIABLES SETUP
var questionsRemaining = 8;
var answersCorrect = 0;
var answersWrong = 0;
var answersTimedOut = 0;

var questionArray = ['What dinosaur name means "fast thief?"', 'Which of the following dinosaurs had a giraffe-like neck?', 'What is the only dinosaur lineage to have survived the mass extinction?', 'How many claws did a velociraptor have on each hand?', 'What does "dinosaur" mean?', "What are the spikes on the end of a dinosaur's tail called?", 'An adult Stegosaurus had a brain the size of a... ?', 'Where was the velociraptor first discovered?'];
var answerArray = [['Nanotyrannus', 'Stegosaurus', 'Velociraptor', 'Pteronodon'], ['Ankylosaurus', 'Brachiosaurus', 'Allosaurus', 'Torvosaurus'], ['Snakes', 'Lizards', 'Frogs', 'Birds'], ['Four', 'Three', 'Two', 'One'], ['Terrible lizard', 'Hungry lizard', 'Killer lizard', 'Evil lizard'], ['Chevrons', 'Kothumus', 'Thagomizer', 'Spinalis capitis'], ['Small car', 'Basketball', 'Lime', 'M&M'], ['China', 'Pakistan', 'Mongolia', 'USA']];


//INITIAL START BUTTON
    $('#questionBar').text('Welcome... to Triassic Trivia').addClass('btn btn-warning btn-lg btn-block startButton').attr('type', 'button')

    $('.startButton').on('click', function() { //START BUTTON CLICKED
        $('#questionsBar').removeClass('btn btn-warning btn-lg btn-block startButton').removeAttr('type')
        startNextQuestion();
    });

//NEXT QUESTION REQUEST
function startNextQuestion() {
    var currentQuestion = questionArray[(8 - questionsRemaining)];
    if (questionsRemaining === -1) { //GAME OVER MAN

    } else { //NEXT QUESTION
        $('#questionsBar').text
        questionsRemaining--;
    };
};
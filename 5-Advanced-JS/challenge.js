(function(){
    function Question(question, answers, correctAnswer){
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    var question1 = new Question('What color is a pumpkin?', ['1:Red', '2:Yellow', '3:Orange', '4:Blue'], '3');
    var question2 = new Question('What is the coldest season?', ['1:Fall', '2:Summer', '3:Spring', '4:Winter'], '4');
    var question3 = new Question('Who is not a character in Scooby Doo?', ['1:Frank', '2:Daphne', '3:Velma', '4:Shaggy'], '1');
    var question4 = new Question('What programming language are we learning', ['1:Python', '2:JavaScript', '3:C#', '4:Java'], '2');

    var questions = [
        question1,
        question2,
        question3,
        question4
    ]

var randomNumber, score, input;
score = 0;
function game(){
    //Select the question
    randomNumber = Math.floor(Math.random()*4);
    console.log(questions[randomNumber].question);
    console.log(questions[randomNumber].answers);

    //Request answer from player
    input = prompt('Please enter the number next to the corresponding correct answer or enter \"exit\" to end the game.');

    //Check if the answer is correct
    if(input === questions[randomNumber].correctAnswer){
        score = score+1;
        console.log('Correct! Your score is ' + score);
        console.log('-----------------------------------------');
        game();
    }
    else if(input == 'exit'){
        console.log('Game Over! Your final score is ' + score);
    }
    else{
        console.log('That is incorrect. Your score is still ' + score);
        console.log('-----------------------------------------');
        game();
    }    
}
game();
})();


/*Instuctors Code
(function(){
    function Question(question, answers, correctAnswer){
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
    
    Question.prototype.displayQuestion = function(){
        console.log(this.question);
    
        for (var i=0; i< this.answers.length; i++){
            console.log(i + ': ' + this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function (){
        if(input === questions[randomNumber].correctAnswer){
            console.log('You are a winner!');
        }
        else{
            console.log('That is incorrect.');
        }
    }
    
    var question1 = new Question('What color is a pumpkin?', ['Red', 'Yellow', 'Orange', 'Blue'], 2);
    var question2 = new Question('What is the coldest season?', ['Fall', 'Summer', 'Spring', 'Winter'], 3);
    var question3 = new Question('Who is not a character in Scooby Doo?', ['Frank', 'Daphne', 'Velma', 'Shaggy'], 0);
    var question4 = new Question('What programming language are we learning', ['Python', 'JavaScript', 'C#', 'Java'], 1);
    
    var questions = [question1, question2, question3, question4]
    
    //Select the question
    var randomNumber = Math.floor(Math.random()*questions.length);
    questions[randomNumber].displayQuestion();
    
    //Request answer from player
    var input = parseInt(prompt('Please enter the number next to the corresponding correct answer.'));
    
    questions[randomNumber].checkAnswer();
})();
*/
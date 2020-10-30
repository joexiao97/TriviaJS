export default class TriviaGame { 

    constructor(triviaQuestions){
        this.triviaQuestions = triviaQuestions;

        //generates an array of random unique numbers between 0 to triviaQuestions.length
        this.randomQuestions = [];
        while (this.randomQuestions.length < 10) {
            var rand = Math.floor(Math.random() * this.triviaQuestions.length);
            if (this.randomQuestions.indexOf(rand) === -1) this.randomQuestions.push(rand);
        }

        this.curr_question;
        this.correct_ans;
        
        this.start();
    };
    
    start(){
        this.askQuestion();
        this.time_limit = 30;
        this.score = 0;
        this.isOver = false;
    }
    
    isGameOver(){
        // if (this.isOver = true)
    }

    shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    
    askQuestion(){
        let shuffled_arr = this.shuffle([0,1,2,3]);
        this.curr_question = this.triviaQuestions[this.randomQuestions.pop()];
        this.correct_ans = this.curr_question.correct;
        document.getElementById("trivia-question").textContent = this.curr_question.question;

        document.getElementById(`ans-choice-${(shuffled_arr.pop() + 1)}`).textContent = this.correct_ans;
        while(shuffled_arr.length > 0){
            let num = shuffled_arr.pop();
            document.getElementById(`ans-choice-${(num + 1)}`).textContent = this.curr_question.incorrect.pop();
        }
    }
}
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
        this.timer_active;
        this.startTimer = this.startTimer.bind(this);;
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
        this.waitForAnswer = true;
        this.curr_question = this.triviaQuestions[this.randomQuestions.pop()];
        document.getElementById("question-num").textContent = `Question ${10 - this.randomQuestions.length} of 10`;
        this.correct_ans = this.curr_question.correct;
        document.getElementById("trivia-question").textContent = this.curr_question.question;

        document.getElementById(`ans-choice-${(shuffled_arr.pop() + 1)}`).textContent = this.correct_ans;
        while(shuffled_arr.length > 0){
            let num = shuffled_arr.pop();
            document.getElementById(`ans-choice-${(num + 1)}`).textContent = this.curr_question.incorrect.pop();
        }

        if (!this.timer_active) {
            this.timer_active = setInterval(() => {
                // console.log(this)
                this.startTimer();
            }, 1000);
        }
    }

    waitForAnswer(){
        let choice1 = document.getElementById("ans-choice-1");
        let choice2 = document.getElementById("ans-choice-2");
        let choice3 = document.getElementById("ans-choice-3");
        let choice4 = document.getElementById("ans-choice-4");

        choice1.addEventListener("click", function(){
            if (choice1.value == this.correct_ans){
                this.score += 1;
            }
        });

        choice2.addEventListener("click", function () {
            if (choice1.value == this.correct_ans) {
                this.score += 1;
            }
        });

        choice3.addEventListener("click", function () {
            if (choice1.value == this.correct_ans) {
                this.score += 1;
            }
        });

        choice4.addEventListener("click", function () {
            if (choice1.value == this.correct_ans) {
                this.score += 1;
            }
        });
        document.getElementById("trivia-score").textContent = `Current Score: ${this.score}`
    }

    startTimer(){
        // console.log(this.time_limit)
        if (this.time_limit < 30) {
            document.getElementById("trivia-time").textContent = `Time Remaining: ${this.time_limit}s`;
        }
        if (this.time_limit > 0) {
            this.time_limit--;
        } else {
            clearInterval(this.timer_active);
        }
    }

}
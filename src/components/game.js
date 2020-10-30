export default class TriviaGame { 

    constructor(triviaQuestions){
        this.triviaQuestions = triviaQuestions;

        //generates an array of random unique numbers between 0 to triviaQuestions.length
        this.randomQuestions = [];
        while (this.randomQuestions.length < 10) {
            var rand = Math.floor(Math.random() * this.triviaQuestions.length);
            if (this.randomQuestions.indexOf(rand) === -1) this.randomQuestions.push(rand);
        }

        this.score = 0;
        this.current_question = 1;
        console.log("hi")
    };

}
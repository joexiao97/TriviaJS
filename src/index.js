import "./styles/index.scss";
import TriviaGame from "./components/game.js"

document.getElementById("play_button").addEventListener("click", function(){
  //gets data from trivia_data.json file and stores it into variable 'trivia_data'
  $.getJSON('trivia_data.json', function (data) {
    const game = new TriviaGame(data);
  })
});


import "./App.css";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import { FinalScore } from './Components/FinalScore';
import "./Components/styles/final-score.css";
import {useState} from 'react';
import { answersLeft, correctCount, incorrectCount } from "./Components/ScoreBoard";
import { initialFishes } from "./Components/GameBoard";

function App() {
  const [answer, setAnswer] = useState('');
  const [checkFish, setCheckFish] = useState(answersLeft);
  const [correct, setCorrect] = useState(correctCount);
  const [index, setIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(initialFishes[0].name)
  const [inCorrect, setInCorrect] = useState(incorrectCount);

  const checkAnswer = (answer) => {
    setCheckFish(checkFish.filter(fish => correctAnswer !== fish))
    setIndex(index + 1);
    if ((index + 1) < initialFishes.length) {
      setCorrectAnswer(initialFishes[index + 1].name)
    } else {setCorrectAnswer('')}
  }

  const updateCount = (answer) => {
    const index = answersLeft.indexOf(answer);
    if ((index !== -1) && (answer === correctAnswer)) {
      setCorrect(correct + 1);
    }
    else {
      setInCorrect(inCorrect + 1)
    }
  }

  return (
    <div className="App">
      <header>
        <ScoreBoard 
          answer={answer}
          checkFish={checkFish}
          setCheckFish={setCheckFish}
          correct={correct}
          inCorrect={inCorrect}
          />
        {((inCorrect + correct) < 4) 
        ? 
        <GameBoard 
          setAnswer={setAnswer}
          index={index}
          setCorrectAnswer={setCorrectAnswer}
          answer={answer}
          checkAnswer={checkAnswer}
          updateCount={updateCount}
        />
        : <FinalScore
          correct={correct}
          inCorrect={inCorrect}
        />
        }
      </header>
    </div>
  );
}

export default App;

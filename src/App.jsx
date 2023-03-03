import "./App.css";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import { FinalScore } from "./Components/FinalScore";
import "./Components/styles/final-score.css";
import { useState, useEffect, useRef } from "react";
import {
  answersLeft,
  correctCount,
  incorrectCount,
} from "./Components/ScoreBoard";
import { initialFishes } from "./Components/GameBoard";

function App() {
  const [index, setIndex] = useState(0);
  const [inCorrect, setInCorrect] = useState(incorrectCount);
  const [correct, setCorrect] = useState(correctCount);
  const filtered = answersLeft.slice(index);

  const checkAnswer = () => setIndex(index + 1);

  const updateCount = (answer) => {
    if (index !== -1 && answer === initialFishes[index].name) {
      setCorrect(correct + 1);
    } else {
      setInCorrect(inCorrect + 1);
    }
  };

  return (
    <div className="App">
      <header>
        <ScoreBoard
          correct={correct}
          inCorrect={inCorrect}
          filtered={filtered}
        />
        {inCorrect + correct < 4 ? (
          <GameBoard
            index={index}
            checkAnswer={checkAnswer}
            updateCount={updateCount}
          />
        ) : (
          <FinalScore correct={correct} inCorrect={inCorrect} />
        )}
      </header>
    </div>
  );
}

export default App;

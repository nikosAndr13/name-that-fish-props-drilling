import {useState} from 'react';
import "./styles/score-board.css";
import React from "react";
//  Where the score is presented
export const incorrectCount = 0;
export const correctCount = 0;
export const answersLeft = ["trout", "salmon", "shark", "tuna"];

export const ScoreBoard = (props) => {
  const {checkFish, inCorrect, correct} = props;
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {inCorrect}</div>
      <div id="choices-left">
        {checkFish.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correct}</div>
    </div>
  );
};

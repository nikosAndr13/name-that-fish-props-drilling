import "./styles/game-board.css";
import { Images } from "../assets/images";
import { useState, useEffect } from "react";

export const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export const GameBoard = (props) => {
  const { checkAnswer, updateCount, index } = props;
  const nextFishToName = initialFishes[index];
  const [answer, setAnswer] = useState("");

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          checkAnswer();
          updateCount(answer);
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

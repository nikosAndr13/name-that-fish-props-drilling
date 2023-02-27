export const FinalScore = ({correct, inCorrect}) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correct}</p>
      <hr />
      <p>{correct + inCorrect}</p>
    </div>
  </div>
);

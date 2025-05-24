export default function Instructions() {
  return (
    <div className="instructions">
      <h2>How to Play</h2>
      <ul>
        <li>Click on a card to reveal its number.</li>
        <li>Try to find the matching pair by clicking on another card.</li>
        <li>If the numbers match, the cards will remain revealed.</li>
        <li>
          If they do not match, the cards will be hidden again after a short
          delay.
        </li>
        <li>Continue until all pairs are matched to win the game!</li>
      </ul>
    </div>
  );
}

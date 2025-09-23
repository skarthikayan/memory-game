export default function Todo() {
  return (
    <div className="todo">
      <h2>TASKS:</h2>
      <ul>
        <li>
          <strong>Render a Grid of Cards</strong>
          <ul className="item">
            <li>
              Create a grid of 12 cards, each with a placeholder value (e.g.,
              ?).
            </li>
            <li>Ensure the cards are displayed in a 4x3 layout.</li>
          </ul>
          <p>
            <strong>Expected Output:</strong> A grid of cards with placeholder
            values visible on the screen.
          </p>
        </li>
        <li>
          <strong>Reveal Card on Click</strong>
          <ul className="item">
            <li>
              Implement functionality to reveal the number on a card when it is
              clicked.
            </li>
            <li>
              Each card should have a unique number (pairs of numbers from 1 to
              6).
            </li>
          </ul>
          <p>
            <strong>Expected Output:</strong> Clicking a card reveals its
            number.
          </p>
        </li>
        <li>
          <strong>Match Two Cards</strong>
          <ul className="item">
            <li>Allow the user to click two cards.</li>
            <li>If the numbers match, keep the cards revealed.</li>
            <li>
              If the numbers do not match, hide the numbers after a short delay.
            </li>
          </ul>
          <p>
            <strong>Expected Output:</strong> Matching cards remain revealed,
            while non-matching cards are hidden again.
          </p>
        </li>
        <li>
          <strong>Style the Game</strong>
          <ul className="item">
            <li>Apply basic styling to the game board and cards.</li>
            <li>
              Ensure the cards are visually distinct when revealed, matched, or
              hidden.
            </li>
          </ul>
          <p>
            <strong>Expected Output:</strong> The game has a clean and visually
            appealing layout.
          </p>
        </li>
      </ul>
    </div>
  );
}

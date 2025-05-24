import React, { useState, useEffect } from "react";
import "./index.css";

type Card = {
  id: number;
  number: number;
  isRevealed: boolean;
  isMatched: boolean;
};

const App: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [firstCard, setFirstCard] = useState<Card | null>(null);
  const [, setSecondCard] = useState<Card | null>(null);
  const [lockBoard, setLockBoard] = useState(false);

  useEffect(() => {
    // Generate 12 cards with pairs of numbers from 1 to 6
    const numbers = [...Array(6).keys()].map((n) => n + 1);
    const shuffledNumbers = [...numbers, ...numbers].sort(
      () => Math.random() - 0.5
    );
    const initialCards = shuffledNumbers.map((number, index) => ({
      id: index,
      number,
      isRevealed: false,
      isMatched: false,
    }));
    setCards(initialCards);
  }, []);

  const handleCardClick = (card: Card) => {
    if (lockBoard || card.isRevealed || card.isMatched) return;

    const updatedCards = cards.map((c) =>
      c.id === card.id ? { ...c, isRevealed: true } : c
    );
    setCards(updatedCards);

    if (!firstCard) {
      setFirstCard(card);
    } else {
      setSecondCard(card);
      setLockBoard(true);
      checkForMatch(card);
    }
  };

  const checkForMatch = (secondCard: Card) => {
    if (firstCard && firstCard.number === secondCard.number) {
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.number === firstCard.number ? { ...card, isMatched: true } : card
        )
      );
      resetTurn();
    } else {
      setTimeout(() => {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === firstCard?.id || card.id === secondCard.id
              ? { ...card, isRevealed: false }
              : card
          )
        );
        resetTurn();
      }, 1000);
    }
  };

  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setLockBoard(false);
  };

  return (
    <div className="App">
      <div className="left">
        <div className="game-container">
          <h1>Memory Game</h1>
          <div className="game-board">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`card ${card.isRevealed ? "revealed" : ""} ${
                  card.isMatched ? "matched" : ""
                }`}
                onClick={() => handleCardClick(card)}
              >
                {card.isRevealed || card.isMatched ? card.number : "?"}
              </div>
            ))}
          </div>
        </div>
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
      </div>
      <div className="todo">
        <h2>To Do:</h2>
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
                Implement functionality to reveal the number on a card when it
                is clicked.
              </li>
              <li>
                Each card should have a unique number (pairs of numbers from 1
                to 6).
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
                If the numbers do not match, hide the numbers after a short
                delay.
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
                Ensure the cards are visually distinct when revealed, matched,
                or hidden.
              </li>
            </ul>
            <p>
              <strong>Expected Output:</strong> The game has a clean and
              visually appealing layout.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import Instructions from "./Instructions";
import Todo from "./Todo";
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

  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setLockBoard(false);
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
        <Instructions />
      </div>
      <Todo />
    </div>
  );
};

export default App;

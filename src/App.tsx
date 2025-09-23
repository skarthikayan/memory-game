import Instructions from "./Instructions";
import Todo from "./Todo";
import Game from "./Game";
import "./index.css";

const App = () => {
  return (
    <div className="app">
      <div className="left">
        <div className="game-container">
          <h1>MEMORY GAME</h1>
          <Game />
        </div>
        <Instructions />
      </div>
      <Todo />
    </div>
  );
};

export default App;

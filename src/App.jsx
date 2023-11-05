import Player from "./components/Player";
import Gameboard from "./components/Gameboard";
import { useState } from "react";

function App() {
  const [curPlayer, setCurPlayer] = useState("X")
  console.log(curPlayer)
  function playerHandler()
  {
    setCurPlayer((cur)=> cur === "X" ? "O" : "X")
  }

  return (
    <main id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName="Player 1" symbol="X" isActive={curPlayer === "X"}/>
        <Player initialName="Player 2" symbol="O" isActive={curPlayer === "O"}/>
      </ol>
      <Gameboard changePlayer = {playerHandler} currentPlayer={curPlayer}/>
    </main>
  );
}

export default App

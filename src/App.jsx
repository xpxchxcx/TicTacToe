import Player from "./components/Player";
import Gameboard from "./components/Gameboard";
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./components/wining_comb";
import { useState } from "react";
import GameOver from "./components/GameOver";

const initialGameboard =
[
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [curPlayer, setCurPlayer] = useState("X")

  let gameBoard = [...initialGameboard.map(array => [...array])];
  let winner = null;
  const isDraw = gameTurns.length == 9 && !winner
  for (const turn of gameTurns)
  {
      const {square, player} = turn;
      const {row, col} = square;
      gameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMBINATIONS)
  {
    const firstSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSymbol = gameBoard[combination[2].row][combination[2].column]

    if(firstSymbol && firstSymbol === secondSymbol &&  firstSymbol === thirdSymbol)
    {
      winner = firstSymbol
    }

  }
  function RestartHandler()
  {
    setGameTurns([]);
  }

  function playerHandler(rowIndex, colIndex)
  {
    setCurPlayer((cur)=> cur === "X" ? "O" : "X")
    setGameTurns((prevTurns) =>{
      let currentPlayer = "X"
      if(prevTurns.length>0 && prevTurns[0].player === "X")
      {
        currentPlayer = "O";
      }
      const updatedTurns = [
        {square : {row: rowIndex , col: colIndex }, player:currentPlayer }
        ,...prevTurns]

      return updatedTurns
    })
  }

  return (
    <>
      <main id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName="Player 1" symbol="X" isActive={curPlayer === "X"}/>
        <Player initialName="Player 2" symbol="O" isActive={curPlayer === "O"}/>
      </ol>
      {(winner || isDraw) && <GameOver winner = {winner} onRestart={RestartHandler}/>}
      <Gameboard changePlayer = {playerHandler} board={gameBoard}/>

    </main>
    <Log turns={gameTurns}/>
    </>


  );
}

export default App

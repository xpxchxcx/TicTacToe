import { useState } from "react"

const initialGameboard =
[
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function Gameboard({changePlayer, currentPlayer})
{
    const [gameBoard, setGameBoard]= useState(initialGameboard)

    function GameBoardHandler(rowIndex, colIndex)
    {
        setGameBoard((prevGameBoard)=>{
            prevGameBoard = [...gameBoard.map((innerArray)=>[...innerArray])]
            prevGameBoard[rowIndex][colIndex] = currentPlayer
            return prevGameBoard
        })

        changePlayer()
    }
    return(
        <ol id="game-board">
            {gameBoard.map((row, rowIndex)=>
            <ol key={rowIndex}>
                {row.map((playerSymbol, colIndex)=>
                <li key={colIndex}>
                    <button onClick={()=> GameBoardHandler(rowIndex, colIndex)}>{playerSymbol}</button>
                </li>
                )}
            </ol>
            )}
        </ol>

    )
}
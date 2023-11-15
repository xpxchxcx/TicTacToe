

export default function Gameboard({changePlayer, board})
{
    return(
        <ol id="game-board">
            {board.map((row, rowIndex)=>
            <ol key={rowIndex}>
                {row.map((playerSymbol, colIndex)=>
                <li key={colIndex}>
                    <button onClick={()=> changePlayer(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                </li>
                )}
            </ol>
            )}
        </ol>

    )
}
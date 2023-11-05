import { useState } from "react"

export default function Player({initialName, symbol, isActive})
{
    function clickHandler()
    {
        //how 2 update based on old state
        setIsEditing((editing)=>!editing)
    }

    function changeHandler(event)
    {
        // on change sends in an event
        // event.target.value is whatev the new nameEdit should be
        setNameEdit(event.target.value)
    }

    const [nameEdit, setNameEdit] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)

    // Rendering content conditionally
    let playerName =  <span className="player-name">{nameEdit}</span>
    if (isEditing)
    {
        playerName = (
        <input type="text" required value={nameEdit} onChange={changeHandler}></input> // 2 way binding for name edit onChange -> setNameEdit -> value={nameEdit}
        );
    }
    return(
        
        <>
            <li className={isActive ? "active" : undefined}> 
                <span className="player" >
                    {playerName}
                    <span className="player-symbol">{symbol}</span>
                    <button onClick={clickHandler}>{isEditing ? "Save" : "Edit"}</button>
                </span>

            </li>
        </>

    )

}
import { useState } from "react";
import TypesofExercisePopup from "./TypesofExercisePopup";

const ExerciseNameDetails = ({ exerciseName }) => {

    const [editpopup, setEditPopup] = useState(false);


    const handleExerciseName = async () => {
        const response = await fetch('/api/workouts/exercisenames/' + exerciseName._id, {
            method: 'DELETE'
        })

        const json = await response.json()

    }


    return (
        <div className="ExerciseName-Details">
            <h1>{exerciseName.name}</h1>
            <p><strong>Description: </strong>{exerciseName.description}</p>
            <p><strong>Exercise created at: </strong>{exerciseName.createdAt}</p>
            <button id="exercisebtn" onClick={handleExerciseName}>Delete</button>
            <button id='ExerciseNameEditBtn' onClick={() => setEditPopup(true)}>Edit</button>

            <TypesofExercisePopup trigger={editpopup} setTrigger={setEditPopup} exerciseName={exerciseName}></TypesofExercisePopup>
        </div>
    )
}

export default ExerciseNameDetails
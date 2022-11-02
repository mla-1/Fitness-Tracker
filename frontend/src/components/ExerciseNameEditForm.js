import { useState } from "react"

const ExerciseNameEditForm = ({props}) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState(null)

    const handleEditSubmit = async (e) => {
        const exerciseName = {name, description}
        const response = await fetch('/api/workouts/exerciseNames/' + props.exerciseName._id,{
            method: "PATCH",
            body: JSON.stringify(exerciseName),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(! response.ok) {
            setError(json.error)
        }
        if(response.ok){
            setName("")
            setDescription("")

            setError(null)
            console.log('Exercise edited',json)
        }
    
    }

    return(
        <form className="editexerciseform" onSubmit={handleEditSubmit}>
            <h4>Edit Exercise</h4>
            <label id='exercisenameinputform'>Exercise Name:</label>
            <input id='exercisenameinputform'type="text"onChange={(e) => setName(e.target.value)} value={name}/>

            <label id='exercisenameinputform'>Description:</label>
            <input id='exercisenameinputform'type="text" onChange={(e) => setDescription(e.target.value)} value={description}/>

            <button id="submiteditform">Submit</button>
    </form>
    )
}

export default ExerciseNameEditForm
import { useState } from "react"

const ExerciseNameForm = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const exerciseName = {name, description}

        const response = await fetch('/api/workouts/exerciseNames',{
            method: 'POST',
            body: JSON.stringify(exerciseName),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(! response.ok){
            setError(json.error)
        }
        if(response.ok){
            setName("")
            setDescription("")

            setError(null)
            console.log('new exercise added', json)
        }
    } 
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h4>Create a new Exercise</h4>
            <label id='exercisenameinputform'>Exercise Name:</label>
            <input id='exercisenameinputform'type="text" onChange={(e) => setName(e.target.value)} value={name}/>

            <label id='exercisenameinputform'>Description:</label>
            <input id='exercisenameinputform'type="text" onChange={(e) => setDescription(e.target.value)} value={description}/>

            <button id='exercisenameformbtn'>Add Exercise</button>
        </form>
    )
}

export default ExerciseNameForm
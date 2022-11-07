import { useState } from "react"
import NewWorkoutFormComp from "./NewWorkoutFormComp"

const NewWorkout  = (props) => {

    const [exercisesComp, setExercisesComp] =useState([])

    const [exerciseNames, setExerciseNames] = useState([])

    const [exerciseSets, setExerciseSets] = useState([])

    const [sessionName, setSessionName] = useState("")

    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        let Session = {
            SessionName: '',
            SessionExercises : []
        }

        const cur_Session = Session

        cur_Session.SessionName = sessionName

        exerciseSets.map((item,i) => {
            let exercise = {
                name : '',
                exercisesets : []
            }
            //const exercise = [exerciseNames[i], exerciseSets[i]]
            const cur_exercise = exercise

            cur_exercise.name = exerciseNames[i]
            cur_exercise.exercisesets = exerciseSets[i]

            cur_Session.SessionExercises.push(exercise)
        })
        console.log(cur_Session)

        const response = await fetch('/api/workouts/session', {
            method: 'POST',
            body: JSON.stringify(cur_Session),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if(! response.ok){
            setError(json.error)
            console.log(error)
        }

        if(response.ok){
            console.log(sessionName, " added!")
        }
    }


    const addExercise = () => {
        setExercisesComp([...exercisesComp, NewWorkoutFormComp])
    }

    const removeExercise = (i) => {
        let data = [...exercisesComp]
        data.splice(i,1)
        setExercisesComp(data)
    }

    const showInfo = () => {
        console.log(sessionName)
        exerciseSets.map((item,i) => {
          console.log(exerciseNames[i])
          return (
            item.map((set,i) => {
              return (
                console.log(set.setnumber, set.weight, set.rep)
              )
            })
          )
        })
  
    }

    const handleSessionName = (e) => {
        setSessionName( e.target.value)        
    }

    return (props.trigger) ? (
        <div className='NewWorkoutPopUp' onSubmit={handleSubmit}>
            <div className='NewWorkoutPopup-Inner'>
                <button id='addexercisebtn'onClick={addExercise}>Add Exercise</button>

                <div className="sessionnamefield">
                <input id='SessionNameInputField'
                    name='sessionName'
                    placeholder="Session Name"
                    value={sessionName}
                    onChange={event => handleSessionName(event)}
                />
                </div>

                <p></p>
                {exercisesComp.map((item,i) => {
                    return (
                        <div key={i}>
                            <button id='removeexercisebtn'onClick={() =>removeExercise(i)}>Remove Exercise</button>
                            <p></p>
                            <NewWorkoutFormComp exerciseNames={exerciseNames} exerciseSets={exerciseSets} setExerciseNames={setExerciseNames} setExerciseSets={setExerciseSets} i={i}/>
                        </div>
                    )
                    })}

                <button id='NewWorkoutClose'onClick={() => {props.setTrigger(false); setExercisesComp([])}}>close</button>
                <button id="startsessionbtn" onClick={handleSubmit}>Submit</button>
                {props.children}
            </div>
        </div>
    ): "";
}

export default NewWorkout
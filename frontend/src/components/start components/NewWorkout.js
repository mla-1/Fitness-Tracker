import { useState } from "react"
import NewWorkoutFormComp from "./NewWorkoutFormComp"

const NewWorkout  = (props) => {

    const [exercisesComp, setExercisesComp] =useState([])

    const [exerciseNames, setExerciseNames] = useState([])

    const [exerciseSets, setExerciseSets] = useState([])

    const [sessionName, setSessionName] = useState("")

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
        <div className='NewWorkoutPopUp' onSubmit={showInfo}>
            <div className='NewWorkoutPopup-Inner'>
                <button id='addexercisebtn'onClick={addExercise}>Add Exercise</button>

                <div className="sessionnamefield">
                <input id='SessionNameInputField'
                    type="text"
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
                <button id="startsessionbtn" onClick={showInfo}>Submit</button>
                {props.children}
            </div>
        </div>
    ): "";
}

export default NewWorkout
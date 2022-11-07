import { useState } from 'react' 
import RoutineExerciseForm from './RoutineExerciseForm'

const RoutinePopup = (props) => {

    const [routineName, setroutineName] = useState("")

    const [routineData, setRoutineData] = useState([])

    const [error, setError] = useState("")
    const HandleRoutineName = (e) => {
        setroutineName(e.target.value)
    }

    const complete = async (e) => {
        e.preventDefault()

        let Routine = {
            title: '',
            exercises: []
        }

        const cur_Routine = Routine

        cur_Routine.title=routineName

        cur_Routine.exercises=routineData
        
        const response = await fetch('/api/workouts/routine',{
            method: 'POST',
            body: JSON.stringify(cur_Routine),
            headers: {
                'Content-Type' : 'application/json'
            }
        })

        const json = await response.json()

        if(! response.ok){
            setError(json.error)
            console.log(error)
        }

        if(response.ok){
            console.log(routineName, " added!")
        }
    }

    return (props.trigger) ?(
        <div className="RoutinePopup">
            <div className="RoutinePopup-Inner">
                <button id='RoutinePopupClose-btn' onClick={() => {props.setTrigger(false); setroutineName("");setRoutineData([])}}>Close</button>
                <div>
                    <input className='RoutineNameField'
                        name='routineName'
                        placeholder='Routine Name'
                        value={routineName}
                        onChange={event => HandleRoutineName(event)}
                    />
                    <RoutineExerciseForm routineData={routineData} setRoutineData={setRoutineData}/>
    
                </div>
                <br></br>
                <button id='routinesubmit-btn' onClick={complete}>Submit</button>

            </div>
        </div>
    ): "";
}

export default RoutinePopup
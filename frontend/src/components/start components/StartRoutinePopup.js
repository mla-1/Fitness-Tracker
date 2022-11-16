import { useState, useEffect } from 'react'
import StartRoutineExerciseForm from './StartRoutineExerciseForm'

const StartRoutinePopup = (props) => {
    //holds the number of minimum exercises this routine will have
    const [componentsnumber, setComponentsNumber] = useState(props.currentroutineexercisenumber)

    //holds the exercise component objects, with it initialized with the 
    //components number.
    const [components, setComponents] = useState([])

    const [exerciseNames, setExerciseNames] = useState([])

    const [exerciseSets, setExerciseSets] = useState([])

    const [sessionName, setSessionName] = useState("")

    const [error, setError] = useState(null)

    //runs once at the beginning of component render, setting the state 
    //of the components number to the number of exercises in the currently
    //selected routine
    useEffect(() => {
        setComponentsNumber(props.currentroutineexercisenumber)
        setSessionName(props.currentroutine.title)
    },[props.currentroutineexercisenumber])

    //takes the number of exercises and creates an initial amount of 
    //component objects in the set state.
    const initialComponents = () => {
        const listofcomponents = []
        for (var i = 0; i < componentsnumber; i++) {
            listofcomponents.push(StartRoutineExerciseForm)
          }
        setComponents(listofcomponents)

        const listofexercisenames = []
        props.currentroutine.exercises.map((exercise) => {
            listofexercisenames.push(exercise.name)
        })
        setExerciseNames(listofexercisenames) 
    }

    const handleSessionName = (e) => {
        setSessionName(e.target.value)
    }

    const addExercise = () => {
        setComponents([...components, StartRoutineExerciseForm])
    }

    const removeExercise = (index) => {

        //remove the component from the comp array
        let compdata = [...components]
        compdata.splice(index,1)
        setComponents(compdata)

        //remove the related set data
        let setdata = [...exerciseSets]
        setdata.splice(index,1)
        setExerciseSets(setdata)
        
        //remove the exercise name from the exercises array
        let namedata = [...exerciseNames]
        namedata.splice(index,1)
        setExerciseNames(namedata)

    }

    const check =  async (e) =>{
        console.log(sessionName)
        console.log(exerciseNames)
        console.log(exerciseSets)

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

    return (props.trigger) ? (
        <div className="StartRoutinePopup">
            <div className="StartRoutinePopup-Inner">
                <div>
                    <button id='generateroutinestartform'onClick={() => initialComponents() }> Generate </button>
                    <button id='addexerciseroutinebtn'onClick={addExercise}>Add Exercise</button>
                    <div>
                        <input id='sessionNameRoutineInputField'
                        name='sessionName'
                        placeholder='Session Name'
                        value={sessionName}
                        onChange={event => handleSessionName(event)}
                        />
                    </div>
                    {components.map((component, index) => {
                        return (
                            <div key={index}>
                                <button id="removeexercisebtn" onClick={() => removeExercise(index)}> Remove Exercise</button>
                                <p></p>
                                <StartRoutineExerciseForm exerciseNames={exerciseNames} compindex={index} exerciseSets={exerciseSets} setExerciseNames={setExerciseNames} setExerciseSets={setExerciseSets}/>
                            </div>
                        )
                    })}
                    <button id='submitexerciseroutineworkout' onClick={() => check()}> Submit</button>
                </div>
                <button id='StartRoutinePopup-close' onClick={() => {props.setTrigger(false); }}>Close</button>
                {props.children}
            </div>
        </div>
    ): "";
}

export default StartRoutinePopup
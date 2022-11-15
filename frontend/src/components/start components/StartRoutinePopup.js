import { useState, useEffect } from 'react'
import Start from '../../pages/Start';
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

    }

    const handleSessionName = (e) => {
        setSessionName(e.target.value)
    }

    const addExercise = () => {
        setComponents([...components, StartRoutineExerciseForm])
    }

    const removeExercise = (index) => {
        let data = [...components]
        data.splice(index,1)
        setComponents(data)
    }

    const check = () =>{
        console.log(components.length)
        console.log(sessionName)
    }

    return (props.trigger) ? (
        <div className="StartRoutinePopup">
            <div className="StartRoutinePopup-Inner">
                <div>
                    <button id='generateroutinestartform'onClick={() => initialComponents() }> Generate </button>
                    {/*<button onClick={() => check()}> check </button>
                    */}
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
                                <button onClick={() => removeExercise(index)}> Remove Exercise</button>
                                <p></p>
                                <StartRoutineExerciseForm/>
                            </div>
                        )
                    })}
                    <button id='submitroutineworkout' onClick={() => check()}> Submit</button>
                </div>
                <button id='StartRoutinePopup-close' onClick={() => {props.setTrigger(false)}}>Close</button>
                {props.children}
            </div>
        </div>
    ): "";
}

export default StartRoutinePopup
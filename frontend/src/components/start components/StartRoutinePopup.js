import { useState, useEffect } from 'react'
import Start from '../../pages/Start';
import StartRoutineExerciseForm from './StartRoutineExerciseForm'

const StartRoutinePopup = (props) => {

    const [componentsnumber, setComponentsNumber] = useState(props.currentroutineexercisenumber)

    const [components, setComponents] = useState([])

    useEffect(() => {
        setComponentsNumber(props.currentroutineexercisenumber)
    },[props.currentroutineexercisenumber])

    const initialComponents = () => {
        const listofcomponents = []
        for (var i = 0; i < componentsnumber; i++) {
            listofcomponents.push(StartRoutineExerciseForm)
          }
        setComponents(listofcomponents)

    }

    const check = () =>{
        console.log(components.length)
    }

    return (props.trigger) ? (
        <div className="StartRoutinePopup">
            <div className="StartRoutinePopup-Inner">
                <div>
                    <button onClick={() => initialComponents()}> Generate </button>
                    <button onClick={() => check()}> check </button>
                    {components.map((component) => {
                        return (
                            <div>
                                <StartRoutineExerciseForm/>
                            </div>
                        )
                    })}
                </div>
                <button id='StartRoutinePopup-close' onClick={() => {props.setTrigger(false)}}>Close</button>
                {props.children}
            </div>
        </div>
    ): "";
}

export default StartRoutinePopup
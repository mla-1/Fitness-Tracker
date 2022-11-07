
import { useState } from "react"

const RoutineExerciseForm = ({ routineData, setRoutineData}) => {

    const [inputFields, setInputFields] = useState([{exercisename: '', description: ''}])

    const deleteFields = (index) => {
        let data = [...inputFields]
        data.splice(index,1)
        setInputFields(data)
    }

    const addFields = () => {
        let object = {
            exercisename: '',
            description: ''
        }
        setInputFields([...inputFields, object])

    }

    const handleFormChange = (index, event) => {
        let data = [...inputFields]
        data[index][event.target.name] = event.target.value
        setInputFields(data)
    }

    const Submition = () => {
        setRoutineData(inputFields)
    }



    return (
        <div className="routineform">
            {inputFields.map((input, index) => {
                return (
                    <div id='exercisefields' key={index}>
                        <input
                        id='exercisenameinput'
                        name='exercisename'
                        placeholder='Exercise Name'
                        value={input.exercisename}
                        onChange={event => handleFormChange(index, event)}
                        />
                        <input
                        id='exercisedescinput'
                        name='description'
                        placeholder='Exercise Description'
                        value={input.description}
                        onChange={event => handleFormChange(index, event)}
                        />
                        <button id='exerciseinputremove-btn'onClick={() => deleteFields(index)}>Remove</button>
                        </div>
                        )
            })}
            <button id='routinexercise-add-btn'onClick={addFields}>+</button>
            <button id='formdone-btn'onClick={Submition}>Done</button>
        </div>
    )
}

export default RoutineExerciseForm
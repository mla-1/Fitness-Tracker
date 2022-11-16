import { useState } from 'react'

const StartRoutineExerciseForm = ({exerciseNames, compindex, exerciseSets, setExerciseNames, setExerciseSets}) => {

    const [inputFields, setInputFields ] = useState([{setnumber: '', weight: '', reps: ''}])

    const [exerciseName, setExerciseName] = useState(exerciseNames[compindex])

    const handleFormChange = (index, event) => {
        let data = [...inputFields]
        data[index][event.target.name] = event.target.value
        setInputFields(data)
    }

    const addFields = () => {
        let object = {
            setnumber : '',
            weight : '',
            reps : ''
        }
        setInputFields([...inputFields, object])
    }

    const removeFields = (index) => {
        let data = [...inputFields]
        data.splice(index,1)
        setInputFields(data)
    }

    const handleName = (e) => {
        setExerciseName(e.target.value)
    }

    const clearFields = () => {
        setInputFields([{setnumber: '', weight: '', reps: ''}]) 
        setExerciseName("")
    }

    const submit = () => {
        let data = [...exerciseNames]
        data.splice(compindex,1, exerciseName)
        setExerciseNames(data)

        let setdata = [...exerciseSets]
        setdata.splice(compindex,1,inputFields)
        setExerciseSets(setdata)
    }

    return (
        <div>
            <form /*onSubmit={submit}*/>
            <div>
                <input id='exerciseinputnamefield'
                    type="text"
                    placeholder="Exercise name"
                    value={exerciseName}
                    onChange={event => handleName(event)}
                />
            </div>
            <br></br>
            {inputFields.map((input, index) => {
                return (
                    <div className='setinfo' key={index}>
                        <input
                        name='setnumber'
                        placeholder='Set Number'
                        value={input.setnumber}
                        onChange={event => handleFormChange(index, event)}
                        />
                        <input
                        name='weight'
                        placeholder='Weight'
                        value={input.weight}
                        onChange={event => handleFormChange(index, event)}
                        />
                        <input
                        name='reps'
                        placeholder='Rep'
                        value={input.reps}
                        onChange={event => handleFormChange(index, event)}
                        />
                        <button id='removebtnforset'onClick={() => removeFields(index)}>Remove</button>
                        </div>
                        )
            })}
            </form>
            <div className='exerciseoptionsbtn'>
            <button id='addSet'onClick={addFields}>+</button>

            <button id='clearfields'onClick={clearFields}>Clear</button>

            <button id='donebtn' onClick={() => submit()}>Done</button>
            </div>
        </div>
    )
}

export default StartRoutineExerciseForm
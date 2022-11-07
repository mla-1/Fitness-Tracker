import {useState} from 'react'

const NewWorkoutFormComp = ({exerciseNames, exerciseSets, setExerciseNames, setExerciseSets, i}) => {

    const [inputFields, setInputFields ] = useState([{setnumber: '', weight: '', reps: ''}])

    const [exerciseName, setExerciseName] = useState("")

    //updates the input fields with the input that is typed by the user
    const handleFormChange = (index, event) => {
        let data = [...inputFields]
        data[index][event.target.name] = event.target.value
        setInputFields(data)
    }

     //adds another field object to the current input fields
    const addFields = () => {
        let object = {
            setnumber : '',
            weight : '',
            reps : ''
        }
        setInputFields([...inputFields, object])
    }


    //removes the current selected input field from the array of input fields
    const removeFields = (index) => {
        let data = [...inputFields]
        data.splice(index,1)
        setInputFields(data)
    }

    //gets the value from the handlename input form
    const handleName = (e) => {
        setExerciseName( e.target.value)        
    }

    const clearFields = () => {
        setInputFields([{setnumber: '', weight: '', reps: ''}]) 
        setExerciseName("")
      }

    const testing = () => {
        //console.log(inputFields)
        //console.log(exerciseName)
        let data = [...exerciseNames]
        data.splice(i,1,exerciseName)
        setExerciseNames(data)
  
        let setdata = [...exerciseSets]
        setdata.splice(i,1,inputFields)
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

            <button id='donebtn'onClick={testing}>Done</button>
            </div>
    </div>
    )
}

export default NewWorkoutFormComp
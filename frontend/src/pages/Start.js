import { useState, useEffect } from 'react';
import NewWorkout from '../components/start components/NewWorkout';
import StartRoutinePopup from '../components/start components/StartRoutinePopup';

const Start = () => {

    const [newworkoutbtn, setnewworkoutbtn] = useState(false)

    //holds all of the routines obtained through the api call
    const [routines, setRoutines] = useState(null)

    //holds the id of the currently selected routine
    const [selectedroutine, SetSelectedRoutine] = useState([])

    //controls the routine start popup
    const [startroutinepopup, setStartRoutinePopup] = useState(false)

    //currently selected routine object
    const [currentroutine, setCurrentRoutine] = useState([])

    //number of exercises from the currently selected routine
    const [currentroutineexercisenumber, setCurrentRoutineExerciseNumber] = useState(0)

    //fetches all the routines from the db
    useEffect(() => {
        const fetchRoutines = async () => {
            const response = await fetch('/api/workouts/routines')
            const json = await response.json()

            if(response.ok){
                setRoutines(json)
            }
        }
        fetchRoutines()
    },[])

    
    useEffect(() => {
        routines?.filter(routine => {
            if (routine._id == selectedroutine){
                //console.log(routine)
                setCurrentRoutine(routine)
                setCurrentRoutineExerciseNumber(routine.exercises.length)
            }
        })

    },[selectedroutine])

    //onchange function that runs that changed the current selected routine
    const handleRoutineSelect = (e) => {
        e.preventDefault()
        const theselectedRoutine = e.target.value
        SetSelectedRoutine(theselectedRoutine)
    }

    //iterates through the current selected routine object and obtains 
    //the exercise names and puts them into an array
    //const obtainExercises = () => {
        //let listofnames = []
        //{currentroutine.exercises.map((names) => {
            //listofnames.push(names.name)
            //console.log('list of exercises', listofnames)
        //})}
        //setRoutineExercises(listofnames)
    //}

    const printstuff = () => {
        console.log('complete exercises', currentroutine)
    }
    return (
        <div>
            <main>
            <button id='newworkout-btn'onClick={() => setnewworkoutbtn(true)}>New Workout</button>
            <button id='routine-selecter'onClick={() => {setStartRoutinePopup(true)}}>Open Routine</button>
            <div id='routine-dropdown'>
                <select
                name="Routines"
                onChange={e => handleRoutineSelect(e)}
                value={selectedroutine}
                >
                    <option value="">Select your routine</option>
                    {routines && routines.map((single_routine, index) => (
                    <option key={index} value={single_routine._id}>
                        {single_routine.title}
                    </option>
                    ))}
                </select>
            </div>
            {/*<button onClick={() => printstuff()}>checker</button>
            */}
            </main>
            <NewWorkout trigger={newworkoutbtn} setTrigger={setnewworkoutbtn}>
            </NewWorkout>

            <StartRoutinePopup trigger={startroutinepopup} setTrigger={setStartRoutinePopup} currentroutine={currentroutine} currentroutineexercisenumber = {currentroutineexercisenumber}>
            </StartRoutinePopup>
        </div>
    );
}

export default Start
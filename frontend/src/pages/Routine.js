import { useState, useEffect} from 'react'
import RoutinePopup from '../components/routine components/RoutinePopup'
import RoutineDetails from '../components/routine components/RoutineDetails'

const Routine = () => {

    const [createroutine, setCreateRoutine] = useState(false)


    const [routines, setRoutines] = useState(null)

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
 
    return (
        <div className='routine'>
            <button id='createroutine-btn'onClick={() => setCreateRoutine(true)}>Create a new Routine</button>

            <RoutinePopup trigger={createroutine} setTrigger={setCreateRoutine}>
            </RoutinePopup>
            <div>
            {routines && routines.map((single_routine) => {
                return (
                    <div>
                        <RoutineDetails single_routine={single_routine}>
                        </RoutineDetails>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Routine
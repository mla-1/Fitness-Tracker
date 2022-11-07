import { useState } from 'react' 
import RoutineDetailsPopup from './RoutineDetailsPopup'

const RoutineDetails = ({single_routine}) => {

    const deleteRoutine = async (id) => {
        const response = await fetch('/api/workouts/routine/' + id, {
            method: 'DELETE'
        })
        const json = await response.json()
    }

    const [routinedetailspopup, setRoutineDetailsPopup] = useState(false)

    return(
        <div id="Routine-Card">
            <p id='routine-title'>Routine Name: {single_routine.title}</p>
            <button id='routine-delete-btn' onClick={() => deleteRoutine(single_routine._id)}>Delete</button>
            <button id='routine-details-btn' onClick={() => setRoutineDetailsPopup(true)}>Details</button>
            <RoutineDetailsPopup trigger={routinedetailspopup} setTrigger={setRoutineDetailsPopup} single_routine={single_routine}>

            </RoutineDetailsPopup>
        </div>
    )
}

export default RoutineDetails
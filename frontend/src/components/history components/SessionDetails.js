import { useState } from "react"
import HistoryDetailsPopup from "./HistoryDetailsPopup"

const SessionDetails = ({ Session }) => {

    const handleSession = async () => {
        const response = await fetch('/api/workouts/session/' + Session._id, {
            method: 'DELETE'
        })

        const json = await response.json()
    }
    const [detailspopup, setDetailsPopup] = useState(false);

    const [editdetailspopup, setEditDetailsPopup] = useState(false);

    return (
        <div className="SessionDetails">
            <h1>{Session.SessionName}</h1>
            <p>Session Date: {Session.createdAt}</p>
            <button id='sessiondelete' onClick={handleSession}>Delete</button>
            <button id='sessioninfo' onClick={() => setDetailsPopup(true)}>Details</button>
            <button id='sessionedit' onClick={() => setEditDetailsPopup(true)}>Edit</button>     
            <HistoryDetailsPopup trigger={detailspopup} setTrigger={setDetailsPopup} Session={Session}>
            </HistoryDetailsPopup>
        </div>
    )
}

export default SessionDetails
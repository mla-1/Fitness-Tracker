import { useState } from "react"
import HistoryDetailsPopup from "./HistoryDetailsPopup"
import formatDistancetoNow from 'date-fns/formatDistanceToNow'
const SessionDetails = ({ Session }) => {

    const handleSession = async () => {
        const response = await fetch('/api/workouts/session/' + Session._id, {
            method: 'DELETE'
        })

        const json = await response.json()
    }
    const [detailspopup, setDetailsPopup] = useState(false);

    const showinfo = () => {
        console.log(Session)
    }
    return (
        <div className="SessionDetails">
            <h1>{Session.SessionName}</h1>
            <p>Session Date: {formatDistancetoNow(new Date(Session.createdAt), { addSuffix: true })}</p>
            <button id='sessiondelete' onClick={handleSession}>Delete</button>
            <button id='sessioninfo' onClick={() => {setDetailsPopup(true);showinfo()}}>Details</button>
            <HistoryDetailsPopup trigger={detailspopup} setTrigger={setDetailsPopup} Session={Session}>
            </HistoryDetailsPopup>
        </div>
    )
}

export default SessionDetails
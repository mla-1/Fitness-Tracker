import { useEffect, useState } from "react"
import SessionDetails from "../components/history components/SessionDetails"

const History = () => {

    const [sessions, setSessions] = useState(null)

    useEffect(() => {
        const fetchSessions = async () => {
            const response = await fetch('/api/workouts/sessions')
            const json = await response.json()

            if(response.ok){
                setSessions(json)
            }
        }

        fetchSessions()
    },[])

    return (
        <div className='history'>
            <div className="Sessions">
                {sessions && sessions.map((Session) => (
                    <SessionDetails key={Session._id} Session={Session}/>
                ))}
            </div>
        </div>
    )
}

export default History
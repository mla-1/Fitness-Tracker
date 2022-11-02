import { useEffect, useState } from 'react'
import Time from '../components/Time'
import SessionNumber from '../components/SessionNumber'

const Home = () => {
    const [workouts, SetWorkouts] = useState(0)
    useEffect(() => {
        const fetchSessions = async () => {
            const response = await fetch('api/workouts/sessions')
            const json = await response.json()
            
            if (response.ok){
                SetWorkouts(json)
            }
        }
        fetchSessions()
    },[])

    return (
        <div className='home'>
            <h2>Welcome! The Current Time Is:</h2>
            <div className='curTime'>
                <p><Time></Time></p>
                <p>Workouts To Date: <SessionNumber workouts={workouts}></SessionNumber></p>
            </div>
        </div>
    )
}

export default Home
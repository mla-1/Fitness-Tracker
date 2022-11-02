import { useState } from 'react';
import NewWorkout from '../components/start components/NewWorkout';
const Start = () => {

    const [newworkoutbtn, setnewworkoutbtn] = useState(false)

    return (
        <div>
            <main>
            <button id='newworkout-btn'onClick={() => setnewworkoutbtn(true)}>New Workout</button>
            </main>

            <NewWorkout trigger={newworkoutbtn} setTrigger={setnewworkoutbtn}>
            </NewWorkout>
        </div>
    );
}

export default Start
import React, { useEffect, useState } from 'react'
import ExerciseNameDetails from '../components/ExerciseNameDetails'
import ExerciseNameForm from '../components/ExerciseNameForm'

const TypesofExercises = () => {
    const [exercises, setExercises] = useState(null)

    useEffect(() => {
        const fetchExercises = async () => {
            const response = await fetch('/api/workouts/exercisenames')
            const json = await response.json()

            if (response.ok){
                setExercises(json)
            }
        }

        fetchExercises()
    }, [])
    return (
        <div className='typesofexercises'>
            <div className='exercises'>
                {exercises && exercises.map((exerciseName) => (
                    <ExerciseNameDetails key={exerciseName._id} exerciseName={exerciseName} />
                ))}
            </div>
            <ExerciseNameForm/>
        </div>
    )
}

export default TypesofExercises
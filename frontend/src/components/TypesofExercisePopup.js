import React from 'react'
import ExerciseNameEditForm from './ExerciseNameEditForm';

const TypesofExercisePopup = (props) => {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <ExerciseNameEditForm props={props}/>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>Close</button>
                { props.children}
                {/* <p>time:{props.exerciseName.name}</p> */}
            </div>
        </div>
    ) : "";
}

export default TypesofExercisePopup
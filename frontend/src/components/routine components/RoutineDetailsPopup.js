
const RoutineDetailsPopup = (props) => {
    return (props.trigger) ? (
        <div>
            <div id='routineinfo'>
                {props.single_routine.exercises.map((i) => {
                    return (
                        <div id='routineexercise-info'>
                            <p><strong>{i.name}</strong>: {i.description}</p>
                        </div>
                    )
                })}
            </div>
            <button id="routineinfo-close-btn"onClick={() => props.setTrigger(false)}>close</button>
            {props.children}
        </div>
    ): "";
}

export default RoutineDetailsPopup
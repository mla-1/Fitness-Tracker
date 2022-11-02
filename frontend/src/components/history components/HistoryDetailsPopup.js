const HistoryDetailsPopup = (props) => {
    return(props.trigger) ? (
        <div className="historyPopup">
            <div className="historyPopup-inner">
            <button id="historyclose" onClick={() => props.setTrigger(false)}>close</button>
            { props.children }            
            {/*
            <p>{props.Session.SessionExercises[0].exercisesets[2].reps}</p>
    */}
            {props.Session.SessionExercises.map((exercises) => {
                return (
                    <div>
                        <p><strong>{exercises.name}</strong></p> 
                        {exercises.exercisesets.map((sets) => {
                            return (
                            <div>
                                <p><strong>{sets.setnumber}</strong> {sets.weight} {sets.reps}</p>
                            </div>
                            )
                        })}
                    </div>
                )
            })}
            </div>
        </div>
    ) : "";
}

export default HistoryDetailsPopup
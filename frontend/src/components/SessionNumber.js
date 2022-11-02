
const SessionNumber = ({workouts}) => {
    const totalsessions = Object.keys(workouts).length;
    return (
        <div className="sessColor">
            <p>{totalsessions}</p>
        </div>
    )
}

export default SessionNumber
import { useState, useEffect } from "react";

const Time = () => {
    var [time, setTime] = useState(new Date())

    useEffect(() => {
        var timer = setInterval(() =>setTime(new Date(), 1000))
        
        return function cleanup(){
            clearInterval(timer)
        }
    })
    return (
        <div>
            <p>{time.toLocaleDateString()} {time.toLocaleTimeString()}</p>
        </div>
    )
}

export default Time
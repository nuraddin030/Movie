import React, {useRef, useState, useEffect} from "react";

function setDefaultValue () {
    const userCount = localStorage.getItem("count");
    return userCount ? +userCount : 0;
}

export default function Timer () {
    const [count, setCount] = useState(setDefaultValue());
    const [isCounting, setIsCounting] = useState(false)
    const timerIdRef = useRef(null);

    const handleStart = () => {
        setIsCounting(true)

        timerIdRef.current = setInterval (() => {
           setCount((prev) => prev + 1)
        },1000)
    }

    const handleStop = () => {
        clearInterval(timerIdRef.current)
        setIsCounting(false)
    }

    const handleReset = () => {
        setCount(0);
        setIsCounting(false)
    }

    useEffect(() => {
        localStorage.setItem("count", count)
    }, [count])

    useEffect(() => {
        if (isCounting) {
            timerIdRef.current = setInterval(() => {
                setCount((prev)=> prev +1)
            }, 1000)
        }

        return () => {
            timerIdRef.current && clearInterval(timerIdRef.current)
            timerIdRef.current = null
        }
    }, [isCounting])

    return (
        <div className="App">
            <p>React Timer</p>
            <p>React Timer: {count}</p>
            {!isCounting ? (
                <button className="success" onClick={handleStart}>
                    Start
                </button>
            ) : (
                <button className="danger" onClick={handleStop}>
                    Stop
                </button>
            )}
            <button className="secondary" onClick={handleReset}>
                Reset
            </button>
        </div>
    );

}
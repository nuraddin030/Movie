import React, {useRef, useState, useEffect, useReducer} from "react";
import reducer from "../redux/reducer";

function setDefaultValue () {
    const userCount = localStorage.getItem("count");
    return userCount ? +userCount : 0;
}

export default function Timer () {
    const [{count, isCounting}, dispatch] = useReducer(reducer, {count: setDefaultValue(), isCounting: false})

    useEffect(() => {
        localStorage.setItem("count", count)
    }, [count])

    useEffect(() => {
        let timerId = null;
        if (isCounting) {
            timerId = setInterval(() => {
                dispatch({type: "TICK"})
            }, 1000)
        }

        return () => {
            timerId && clearInterval(timerId)
            timerId = null
        }
    }, [isCounting])

    return (
        <div className="App">
            <p>React Timer</p>
            <p>React Timer: {count}</p>
            {!isCounting ? (
                <button className="success" onClick={() => dispatch({type: "START"})}>
                    Start
                </button>
            ) : (
                <button className="danger" onClick={() => dispatch({type: "STOP"})}>
                    Stop
                </button>
            )}
            <button className="secondary" onClick={() => dispatch({type: "RESET"})}>
                Reset
            </button>
        </div>
    );

}
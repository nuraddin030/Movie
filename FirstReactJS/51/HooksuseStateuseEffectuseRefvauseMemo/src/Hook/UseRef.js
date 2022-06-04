
import React, {useState, useEffect, useRef} from "react";
import "./App.css"
import {Button, ButtonGroup, TextField} from "@mui/material";

// let renderCount = 1;

export default function App (props) {
    // const [renderCount, setRenderCount] = useState(1);

    const [value, setValue] = useState("Default")

    const renderCount = useRef(1); // useRef bizga obyekt qaytaradi

    const inputRef = useRef(null)

    const prevValue = useRef("")

    // console.log(renderCount)


    useEffect(() => {
        renderCount.current ++;
        console.log(inputRef.current.value)
    })

    useEffect(() => {
        prevValue.current=value;
    },[value])

    const focus = () => inputRef.current.focus();

    return (
        <div className="container app text-center">
            <p>Amount of rendering: {renderCount.current}</p>
            <p>Last value: {prevValue.current}</p>
            <input
                type="text"
                // variant="outlined"
                // label="ReactJS"
                value={value}
                onChange={e =>setValue(e.target.value)}
                ref={inputRef}
            />
            <Button
                variant="outlined"
                color="success"
                onClick={focus}
            >
                Click me
            </Button>
        </div>
    )
}
import React, {useState, useEffect, useRef, useMemo} from "react";
import "./App.css"
import {Button, ButtonGroup, TextField} from "@mui/material";

function complete(num) {
    let i =0
    while (i < 1000000) i++
    return num * 2
}

export default function App () {

    const [number, setNumber] = useState(8)
    const [colored, setColored] = useState(false)

    const styles = useMemo(() => {
        return {
            color: colored ? "crimson" : "black"
        }
    }, [colored])

    const computed = useMemo(() => {
        return complete(number)
    }, [number])

    useEffect(() => {
        console.log("Styles was changed")
    }, [styles])

    return (
        <div className="container app text-center">
            <p style={styles}>Amount: {computed} </p>
            <Button
                variant="outlined"
                color="success"
                onClick={() => setNumber((prev) => prev + 1)}
            >
                Add
            </Button>
            <Button
                variant="outlined"
                color="success"
                onClick={() => setNumber((prev) => prev - 1)}
            >
                Delete
            </Button>
            <Button
                variant="outlined"
                color="success"
                onClick={() => setColored((prevState => !prevState))}
            >
                Edit
            </Button>
        </div>
    )
}

import React, {useState, useEffect, useRef, useMemo, useCallback} from "react";
import "./App.css"
import {Button, ButtonGroup, TextField} from "@mui/material";
import UseCallbackItemList from "./UseCallbackItemList";

export default function App () {

    const [colored, setColored] = useState(false);
    const [count, setCount] = useState(1);

    const styles = {
        color: colored ? "crimson" : "black"
    }

    const generateItem = useCallback( () => {
        return new Array(count).fill("").map((_, index) => `Element ${index+1}`);
    }, [count] )

    return (
        <div className="container app text-center">
            <h1 style={styles}>Amount of count: {count} </h1>
            <Button
                variant="contained"
                color="success"
                onClick={() => setCount((prevState => prevState + 1))}
            >
                Add count
            </Button>
            <Button
                variant="contained"
                color="error"
                onClick={()=> setColored((prevState => !prevState))}
            >
                Edit color
            </Button>
            <UseCallbackItemList getItems={generateItem} />
        </div>
    )
}

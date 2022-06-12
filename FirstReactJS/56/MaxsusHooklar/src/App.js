import React, {useState} from "react";
import "./App.css"
import {usePrevious} from "./Hook/usePrevious";
import {Button} from "@mui/material";
import {useLocalStorage} from "./Hook/useLocalStorage";

export default function App () {

    const [count, setCount] = useLocalStorage(0, 'count');

    const prevCount = usePrevious(count)

    return (
        <div className="container app text-center">
           <h1>Maxsus hooklar</h1>
            <p>Current: {count}</p>
            <p>Previous: {prevCount}</p>
            <Button
                variant="outlined"
                onClick={()=> setCount(count+1)}
            >
                Click
            </Button>
        </div>
    )
}

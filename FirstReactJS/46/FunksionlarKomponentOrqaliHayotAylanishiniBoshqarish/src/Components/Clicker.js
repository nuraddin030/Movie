import React, {useState} from "react";
import {Button} from "@mui/material";

const Clicker = () => {
    const [count, setCount] = useState(0)

    return (
        <div className="app">
            <h1>Counter: {count}</h1>
            <Button onClick={() => setCount(count+1) } variant="outlined">Increment</Button>
            <Button onClick={() => setCount(count-1)} variant="outlined">Decrement</Button>
        </div>
    )
}
export default Clicker
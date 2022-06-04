import React, {useState} from "react";
import "./App.css"
import {Button} from "@mui/material";

 const App = () => {
     const [count, setCount] = useState(0)

     // function increment () {
     //     setCount(count+1)
     // }
     // function decrement () {
     //     setCount(count - 1)
     // }

    return (
        <div className="app">
            <h1>Counter: {count}</h1>
            <Button onClick={() => setCount(count+1) } variant="outlined">Increment</Button>
            <Button onClick={() => setCount(count-1)} variant="outlined">Decrement</Button>
        </div>
    )
}
export default App;
import React, {useState} from "react";
import Timer from "./Components/Timer"
import "./App.css"
import {Button} from "@mui/material";

function App (){
    const [isTimer, setTimer] = useState(false)
        return (
            <div>
                <h1>React App</h1>
                <Button
                    variant="outlined"
                    onClick={() => setTimer(!isTimer)}>
                    Toggle clicker
                </Button>
                {isTimer && <Timer />}
            </div>
        )
}
export default App
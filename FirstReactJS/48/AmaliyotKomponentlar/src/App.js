import React, {useState} from "react";
import Timer from "./Components/Timer"
import "./App.css"

function App (){
    const [isTimer, setTimer] = useState(false)
        return (
            <div className="app">
                <h1>React App</h1>
                <button onClick={() => setTimer(!isTimer)}>
                    Toggle clicker
                </button>
                {isTimer && <Timer />}
            </div>
        )
}
export default App
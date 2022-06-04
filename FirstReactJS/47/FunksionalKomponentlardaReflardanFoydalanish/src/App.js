import "./App.css"
import {Button, TextField} from "@mui/material";
import {useEffect, useRef} from "react";

 const App = () => {

    const inputRef = useRef(null);

     const handleClick = () => {
        inputRef.current.focus();
     };

     useEffect(() => {
         inputRef.current.focus();
     }, [])

    return (
        <>
            <h1>React App</h1>
            <TextField
                type="text"
                id="outlined-basic"
                label="Enter your name"
                variant="outlined"
                className="d-block mb-2"
                ref = {inputRef}
            />
            <Button
                variant="outlined"
                onClick={handleClick}
            >
                Click
            </Button>
        </>
        )
}
export default App;
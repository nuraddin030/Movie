import Clicker from "./Components/Clicker";
import "./App.css"
import {Button} from "@mui/material";
import {useEffect, useState} from "react";

 const App = () => {

     const [isClicker, setClicker] = useState(false)

     // useEffect(() => {
     //     console.log("render")      -  componentDidMount ga teng, faqat bir marta ishlaydi
     // }, [])

     // useEffect(() => {
     //     console.log("render", isClicker) - componentDidUpdate
     // }, [isClicker])

     // useEffect(()=> {
     //     console.log("render", isClicker)
     //
     //     return () => console.log("bye bye"); - componentWillUpdate
     // }, [isClicker])

    return (
        <>
            <h1>React App</h1>
            <Button onClick={() => setClicker(!isClicker)} variant="outlined">Toggle clicker</Button>
            {isClicker && <Clicker />}
        </>
        )
}
export default App;
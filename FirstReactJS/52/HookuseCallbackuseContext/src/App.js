import React, {useState} from "react";
import "./App.css"
import Main from "./Main";
import Alert from "./Alert";

export const AlertContext = React.createContext();

export default function App () {

    const [alert, setAlert] = useState(false)

    const toggleAlert = () => {
        setAlert(prevState => !prevState)
    }

    return (
        <AlertContext.Provider value={alert}>
            <div className="container app text-center">
                <Alert />
                <Main toggle = {toggleAlert} />
            </div>
        </AlertContext.Provider>
    )
}

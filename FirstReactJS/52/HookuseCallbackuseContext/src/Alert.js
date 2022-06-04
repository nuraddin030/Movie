import React, {useContext} from 'react';
import {AlertContext} from "./App";

function Alert() {

    const alert = useContext(AlertContext)

    if (!alert) return null;

    return (
        <div style={{
            background: "crimson",
            padding: "20px",
            color: "white",
            margin: "10px 0",
            borderRadius: "10px"
        }}>
            <h6> This messages are very important </h6>
        </div>
    );
}

export default Alert;
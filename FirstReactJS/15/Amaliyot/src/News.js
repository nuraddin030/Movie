import React from "react";

export default function News (props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <div className="box">
                <pre>{props.extra}</pre>
                <p>{props.text}</p>
            </div>
            <div className="square">
                <h1>{props.header}</h1>
            </div>
        </div>
    )
}
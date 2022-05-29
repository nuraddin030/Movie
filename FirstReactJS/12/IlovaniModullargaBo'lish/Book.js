import React from "react";

export default function Book(props) {
    return (
        <div>
            <h2>{(props.name) ? (props.name) : <span>Default book</span>}</h2>
            <p>{props.year}</p>
            <p>{props.price}</p>
            <b>{props.children}</b>
        </div>
    )
}
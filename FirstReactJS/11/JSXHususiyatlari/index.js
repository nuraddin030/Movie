// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
//
// import App from "./App";
//
// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);
//
// root.render(
//     <StrictMode>
//         <App />
//     </StrictMode>,
//     rootElement
// );

import React from "react";
import ReactDOM from "react-dom";

const Book = (props) => {
    return (
        <div>
            <h2>{(props.name) ? (props.name) : <span>Default book</span>}</h2>
            <p>{props.year}</p>
            <p>{props.price}</p>
            <b>{props.children}</b>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <Book name="JS for beginner" year="2020" price="50">
                Extra inform
            </Book>
            <Book name="React for beginner" year="2021" price="60"/>
            <Book name="Veu for beginner" year="2022" price="70"/>
        </div>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)

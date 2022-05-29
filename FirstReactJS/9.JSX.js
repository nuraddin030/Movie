import React from "react";
import ReactDOM from "react-dom";

const Book = ({name, year, price}) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{year}</p>
            <p>{price}</p>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <Book name="JS for beginner" year="2020" price="50"/>
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
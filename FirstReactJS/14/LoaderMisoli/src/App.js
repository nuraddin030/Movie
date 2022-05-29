import React from "react";
import Book from "./Book";
import Loader from "./Loader";

export default function App(props) {
    return props.isLoading ?(
        <Loader />
    ) : (
        <div>
            <Book name="JS for beginner" year="2020" price="50">
                Extra inform
            </Book>
            <Book name="React for beginner" year="2021" price="60"/>
            <Book name="Veu for beginner" year="2022" price="70"/>
        </div>
    )
}

// JSX da for, while, if-else operatorlarini ishlata olmaymiz
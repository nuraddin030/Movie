import React from "react";
import Posts from "./Component/Posts";
import styled from "./App.css"

export default class App extends React.Component {
    state = {
        posts : [
            {id: 1, name: "JavaScript"},
            {id: 2, name: "React Js"},
            {id: 3, name: "Vue Js"}
        ]
    };

    handleSomething = () => {
        console.log("App.js setState updated")
    }

    render() {
        const {posts} = this.state
        return (
            <div className="App">
                <Posts posts  = {posts} callback = {this.handleSomething}/>
            </div>
        )
    }
}


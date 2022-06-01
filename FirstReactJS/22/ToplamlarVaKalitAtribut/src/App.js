import React from "react";
import {Component} from "react";
import {buttonClasses} from "@mui/material";
import styled from "./App.css"
export default class App extends React.Component {
    state = {
        posts : [
            {id: 1, name: "JavaScript"},
            {id: 2, name: "React Js"},
            {id: 3, name: "Vue Js"}
        ]
    };

    render() {
        return (
            <div className="App">
                {this.state.posts.map(post => (
                    <p key={post.id}>{post.id}. {post.name}</p>
                ))}
            </div>
        )
    }
}


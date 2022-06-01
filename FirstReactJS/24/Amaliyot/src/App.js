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

    removePost = (id) => {
        this.setState({posts: this.state.posts.filter(post => post.id!==id)})
    }

    render() {
        const {posts} = this.state
        return (
            <div className="App">
                <Posts posts  = {posts} removePost = {this.removePost}/>
            </div>
        )
    }
}


import React from "react";
import {Component} from "react";

class App extends Component {

        state = {
            count: 1
        }

    handleClick (){
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <button onClick={() => this.setState({count: this.state.count +1})}>{this.state.count}</button>
            </div>
        )
    }
}
export default App;
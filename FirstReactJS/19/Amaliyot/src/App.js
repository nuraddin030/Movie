import React from "react";
import {Component} from "react";

class App extends Component {

        state = {
            count: 1
        }

    handleClick = (val) => {
        this.setState({count: val})
    }

    // incr = () => {
    //    this.setState({count: this.state.count +1})
    // }
    //
    // decr = () => {
    //     this.setState({count: this.state.count -1})
    // }

    // resetCount = () => {
    //     this.setState({count: 0})
    // }


    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <button>Count: {this.state.count}</button>
                <button className="success" onClick={() => this.handleClick(this.state.count + 1)} >INCR</button>
                <button className="danger" onClick={() => this.handleClick(this.state.count - 1)} >DECR</button>
                <button onClick={()=> this.handleClick(0)}>0 nolga tenglash</button>
            </div>
        )
    }
}
export default App;
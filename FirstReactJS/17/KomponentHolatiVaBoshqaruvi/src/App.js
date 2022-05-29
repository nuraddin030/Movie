import React from "react";
import {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1  // count ni o'zgartirishning uch xil usuli bor
        }
    }

    handleClick = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <button onClick={this.handleClick}>{this.state.count}</button>
            </div>
        )
    }
}
export default App;

// JSX da for, while, if-else operatorlarini ishlata olmaymiz
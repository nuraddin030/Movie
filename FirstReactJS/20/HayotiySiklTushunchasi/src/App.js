import React from "react";
import {Component} from "react";

// Life scale 3 ga bo'linadi
// componentDidMount - yangi element qo'shilganda ishlaydi
// componentDidUpdate -
// ComponentWillUnmount -

// ComponentDidMount - usuli
// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             data: "Najimaddinov Nuriddin"
//         }
//     }
//
//     getData() {
//         setTimeout(()=> {
//             console.log("Our data is updated");
//             this.setState({data: "John"})
//         }, 3000)
//     }
//
//     componentDidMount() {
//         this.getData()
//     }
//
//     render() {
//         console.log('render')
//         return (
//             <div>
//                 <p>{this.state.data}</p>
//             </div>
//         )
//     }
// }
// export default App;
// ComponentDidMount - usuli

// ComponentDidUpdate - usuli
// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             posts: [],
//             loading: true,
//             comments: []
//         }
//     }
//
//     componentDidMount() {
//         console.log("componentDidMount")
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(response => response.json())
//             .then(data => this.setState({posts: data, loading: false}))
//
//         this.timerId = setInterval(() => {
//             fetch('https://jsonplaceholder.typicode.com/comments')
//                 .then(response => response.json())
//                 .then(data => this.setState({comments:data}))
//         }, 3000)
//     }
//
//     componentDidUpdate() {
//         console.log("componentDidUpdate")
//     }
//
//     render() {
//         console.log('render')
//         return (
//             <div>
//                 {this.state.loading ? <h3>Loading...</h3> :
//                     <h3>{this.state.posts.length} was loaded, and have {this.state.comments.length} comments</h3>}
//             </div>
//         )
//     }
// }
// export default App;
// ComponentDidUpdate - usuli

// ComponentDidUpdate
// class App extends Component {
//     constructor() {
//         super();
//             this.state = {
//                 favouriteColor: "black"
//             }
//         }
//     componentDidMount() {
//         console.log('componentDidMount')
//         setTimeout(()=> {
//             this.setState({favouriteColor: "white"})
//         }, 3000)
//     }
//
//     componentDidUpdate() {
//         console.log('componentDidUpdate')
//         document.querySelector('p').innerHTML = `
//                The updated favourite is ${this.state.favouriteColor}`
//     }
//
//
//     render() {
//         console.log('render')
//         return (
//             <div>
//                 <p>My favourite color is {this.state.favouriteColor}</p>
//             </div>
//         )
//     }
// }
// export default App;

// ComponentWillUnmount
/*
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  getData = () => {
    this.setState({ show: false });
  };

  render() {
    let myHeader;
    if (this.state.show) {
      myHeader = <Child />;
    }
    return (
      <div>
        {myHeader}
        <button type="button" onClick={this.getData}>
          Delete Header
        </button>
      </div>
    );
  }
}
class Child extends React.Component {
  componentWillUnmount() {
    alert("The component deleted");
  }
  render() {
    return <h1>Hello world </h1>;
  }
}

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

 */

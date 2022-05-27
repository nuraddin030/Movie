const App = () => {
    return React.createElement("h1", {id:"title", className:"paragraph"}, "Hello world")
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))
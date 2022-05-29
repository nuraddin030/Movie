const Book = (props) => {
  return React.createElement('div', {}, [
      React.createElement('h2', {}, 'JS for beginners'),
      React.createElement('p', {}, 2020),
      React.createElement('p', {}, 50)
  ])
}

const App = () => {
    return React.createElement('div', {},[
        React.createElement("h1", {id:"title", className:"paragraph"}, "Hello world"),
        React.createElement(Book, {name: 'JS for beginners', year: 2020, price: 50}),
        React.createElement(Book, {name: 'JS for beginners', year: 2019, price: 60}),
        React.createElement(Book, {name: 'JS for beginners', year: 2021, price: 70})
    ])
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))
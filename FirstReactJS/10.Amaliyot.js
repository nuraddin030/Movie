//
// const News = (props) => {
//     return React.createElement("div", {}, [
//         React.createElement("h1", {}, props.name),
//         React.createElement("div", {className: 'box'},[
//             React.createElement('pre', {}, props.extra),
//             React.createElement('p', {}, props.text),
//         ]),
//         React.createElement('div', {className: 'square'},[
//             React.createElement('h1', {}, props.header)
//         ])
//     ])
// }
//
// const App = () => {
//     return React.createElement('div', {}, [
//             React.createElement(News, {name: 'BBC News', extra: 2020, text: "Najimaddinov Nuriddin", header: "bigJob"}),
//         ])
// }
// ReactDOM.render(React.createElement(App), document.getElementById('root'))

import { StrictMode } from "react";
import ReactDOM from "react-dom";

const News = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <div className="box">
                <pre>{props.extra}</pre>
                <p>{props.text}</p>
            </div>
            <div className="square">
                <h1>{props.header}</h1>
            </div>
        </div>
    )
}

const App = () => {
    return <div>
        <News
            name="BBC News"
            extra="2020"
            text="Najimaddinov Nuriddin"
            header="bigJob"/>

    </div>
}

const rootElement = document.getElementById("root");

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    rootElement
);
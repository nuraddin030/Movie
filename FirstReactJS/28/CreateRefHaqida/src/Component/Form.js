import React from "react";

export default class From extends React.Component {
    constructor() {
        super();
        this.state = {
            card: "",
            cv: "",
            name: "",
        }
        this.cardRef = React.createRef();
        this.cvRef = React.createRef();
        this.nameRef = React.createRef()
    }



    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value}, () => {
            if (this.state.card.length===16){
                this.cvRef.current.focus();
            }
            if (this.state.cv.length===3){
                this.nameRef.current.focus();
            }
        })
    }

    componentDidMount() {
        this.cardRef.current.focus()
    }

    render() {
        const {card, cv, name} = this.state
        return (
            <div>
                <h1>Form</h1>
                <input type="text"
                       placeholder="Visa Number"
                       name="card"
                       value={card}
                       onChange={this.changeHandler}
                       ref = {this.cardRef}
                />
                <input type="text"
                       placeholder="CV"
                       name="cv"
                       value={cv}
                       onChange={this.changeHandler}
                       ref = {this.cvRef}
                />
                <input type="text"
                       placeholder="name"
                       name="name"
                       value={name}
                       onChange={this.changeHandler}
                       ref={this.nameRef}
                />
                <button>
                    Send
                </button>

                {/*<input type="radio" name="gender" value="male" onChange={this.changeHandler}/> Male*/}
                {/*<input type="radio" name="gender" value="female" onChange={this.changeHandler}/> Female*/}
            </div>
        )
    }
}
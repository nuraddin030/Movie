import React from "react";

export default class From extends React.Component {
    constructor() {
        super();
        this.cardRef = React.createRef();
        this.nameRef = React.createRef()
    }

    handleClick = (e) => {
        e.preventDefault();
        if (this.cardRef.current.value.length<16){
            alert("Invalid card number")
            return
        }
    }


    render() {
        return (
            <div className="App">
                <h1>Form</h1>
                <form onSubmit={this.handleClick}>
                    <input type="text"
                           placeholder="Visa Card"
                           name="card"
                           ref = {this.cardRef}
                    />
                    <input type="text"
                           placeholder="name"
                           name="name"
                           ref={this.nameRef}
                    />
                    <button>
                        Send
                    </button>
                </form>
            </div>
        )
    }
}
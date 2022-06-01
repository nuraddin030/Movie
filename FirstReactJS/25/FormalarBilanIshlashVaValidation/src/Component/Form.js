import React from "react";

export default class From extends React.Component {

    state = {
       firstName: "",
       email: ""
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    validateName = () => {
        if (this.state.firstName.length<5){
            alert("'Firstname' 5 harfdan kam bo'lmasligi kerak")
        }
    }

    validateEmail = () =>{
        const reg = (/^[0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
        if (!reg.test(this.state.email))
        {
            alert("Email is not valid");
        }
    }

    render() {
        const {firstName, email} = this.state
        return (
            <div>
                <h1>Form</h1>
                <input type="text"
                    placeholder="FirstName"
                    name="firstName"
                    value={firstName}
                    onChange={this.changeHandler}
                    onBlur={this.validateName}
                />

                <input type="text"
                       placeholder="Email"
                       name="email"
                       value={email}
                       onChange={this.changeHandler}
                       onBlur={this.validateEmail}
                />
            </div>
        )
    }
}
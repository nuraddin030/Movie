import React from "react";

export default class From extends React.Component {

    state = {
       firstName: "",
       email: "",
       message: "",
       select: "",
       subscription: false,
       gender: ""
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    checkedHandler = (e) => {
        this.setState({[e.target.name]: e.target.checked})
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
        const {firstName, email, message, select, subscription, gender} = this.state
        return (
            <div>
                <h1>Form</h1>
                {/*<input type="text"*/}
                {/*    placeholder="FirstName"*/}
                {/*    name="firstName"*/}
                {/*    value={firstName}*/}
                {/*    onChange={this.changeHandler}*/}
                {/*    onBlur={this.validateName}*/}
                {/*/>*/}

                {/*<input type="text"*/}
                {/*       placeholder="Email"*/}
                {/*       name="email"*/}
                {/*       value={email}*/}
                {/*       onChange={this.changeHandler}*/}
                {/*       onBlur={this.validateEmail}*/}
                {/*/>*/}
                {/*<textarea name="message" value={message} onChange={this.changeHandler} placeholder="Message"> </textarea>*/}
                {/*<select name="select" value={select} onChange={this.changeHandler}>*/}
                {/*    <option disabled> </option>*/}
                {/*    <option value="1">1</option>*/}
                {/*    <option value="2">2</option>*/}
                {/*    <option value="3">3</option>*/}
                {/*</select>*/}
                {/*<label>*/}
                {/*    <input type="checkbox" */}
                {/*           name="subscription" */}
                {/*           checked={subscription} */}
                {/*           onChange={this.checkedHandler}/>*/}
                {/*    Subscription*/}
                {/*</label>*/}

                <input type="radio" name="gender" value="male" onChange={this.changeHandler}/> Male
                <input type="radio" name="gender" value="female" onChange={this.changeHandler}/> Female
            </div>
        )
    }
}
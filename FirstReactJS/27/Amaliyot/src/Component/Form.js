import React from "react";

export default class From extends React.Component {

    state = {
       email: "",
       agree: false
    }

    changeHandler = (e) => {
        this.setState({email: e.target.value})
    }

    checkedHandler = (e) => {
        this.setState({agree: e.target.checked})
    }

    btn = (e) => {
        const reg = ( /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        const isValidEmail = reg.test(this.state.email)
        const isValidAgree = this.state.agree
        if (!isValidEmail)
        {
            alert("Email is not valid");
            return
        }

       if (!isValidAgree){
           alert("Siz shartga rozilik bermadingiz")
           return
       }

       this.setState({email: "", agree:false})

       alert("Xabringiz qa'bul qilindi")
    }

    render() {
        const {firstName, email, message, select, agree, gender} = this.state
        return (
            <div>
                <h1>Form</h1>
                <input type="text"
                       placeholder="Email"
                       name="email"
                       value={email}
                       onChange={this.changeHandler}
                />
                <label>
                    <input type="checkbox"
                           name="agree"
                           checked={agree}
                           onChange={this.checkedHandler}
                    />
                    I agree
                </label>
                <button onClick={this.btn}>
                    Send
                </button>

                {/*<input type="radio" name="gender" value="male" onChange={this.changeHandler}/> Male*/}
                {/*<input type="radio" name="gender" value="female" onChange={this.changeHandler}/> Female*/}
            </div>
        )
    }
}
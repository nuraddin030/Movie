import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./PostAddForm.css"

export default class PostAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            text: ""
        }
        this.onValueChange = this.onValueChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onValueChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit (e) {
        e.preventDefault()
        this.props.onAdd(this.state.text)
        this.setState({
            text: ""
        })
    }


    render() {
        return (
            <form className="row" onSubmit={this.onSubmit}>
                <div className="bottom-panel">
                    <TextField
                        id="outlined-basic"
                        label="What are you thinking about?"
                        variant="outlined"
                        className="col-10"
                        onChange={this.onValueChange}
                        value={this.state.text}
                    />
                    <Button
                        type="submit"
                        variant="outlined"
                        size="large"
                    >
                        Add Post
                    </Button>
                </div>
            </form>
        )
    }
}
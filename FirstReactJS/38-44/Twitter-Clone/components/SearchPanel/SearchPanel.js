import * as React from 'react';
import TextField from '@mui/material/TextField';
import "./SearchPanel.css"

export default class SearchPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    onUpdateSearch (e) {
        const term = e.target.value;
        this.setState({term})
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <TextField
                id="standard-basic"
                label="Search by posts"
                variant="standard"
                className="form-control search-input"
                onChange={this.onUpdateSearch}
            />
        )
    }
}
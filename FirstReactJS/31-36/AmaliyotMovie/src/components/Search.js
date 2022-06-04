import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default class Search extends React.Component {
    state = {
        search: "panda",
        type: "all"
    }

    handleKey = (e) => {
        if (e.keyCode === 13){
            this.props.searchMovie(this.state.search, this.state.type)
        }
    }

    handleFilter =(e) => {
      this.setState(() => ({type: e.target.dataset.type}), () => {
          this.props.searchMovie(this.state.search,this.state.type)
      })
    }

    render() {
        return (
            <div className="container">
                <div className="input-group search">
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="outlined-basic"
                            label="Search"
                            variant="outlined"
                            type="search"
                            onChange={(e => this.setState({search: e.target.value}))}
                            onKeyDown={this.handleKey}
                        />
                    </Box>
                    <Stack direction="row">
                        <Button
                            variant="contained"
                            onClick={() => this.props.searchMovie(this.state.search, this.state.type)}
                        >Search
                        </Button>
                    </Stack>
                </div>
                <div className="search_label">
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio" name="type"
                            data-type="all"
                            checked={this.state.type==="all"}
                            onChange={this.handleFilter}
                        />
                        <label className="form-check-label" >All</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio" name="type"
                            data-type="movie"
                            checked={this.state.type==="movie"}
                            onChange={this.handleFilter}
                        />
                        <label className="form-check-label" >Movies only</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="type"
                            data-type="series"
                            checked={this.state.type==="series"}
                            onChange={this.handleFilter}
                        />
                        <label className="form-check-label">Series Only</label>
                    </div>
                </div>
            </div>

        )
    }
}
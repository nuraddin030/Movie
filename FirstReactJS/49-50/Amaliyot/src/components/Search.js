import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Search ({searchMovie}) {
    const [search, setSearch] = useState("panda");
    const [type, setType] = useState("all")

    const handleKey = (e) => {
        if (e.key === "Enter"){
            searchMovie(search, type)
        }
    }

    const handleFilter =(e) => {
      setType(e.target.dataset.type);
      searchMovie(search, e.target.dataset.type)
    }

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
                        onChange={(e => setSearch(e.target.value))}
                        onKeyDown={handleKey}
                    />
                </Box>
                <Stack direction="row">
                    <Button
                        variant="contained"
                        onClick={() => searchMovie(search, type)}
                    >Search Movies
                    </Button>
                </Stack>
            </div>
            <div className="search_label">
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio" name="type"
                        data-type="all"
                        checked={type==="all"}
                        onChange={handleFilter}
                    />
                    <label className="form-check-label" >All</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio" name="type"
                        data-type="movie"
                        checked={type==="movie"}
                        onChange={handleFilter}
                    />
                    <label className="form-check-label" >Movies only</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="type"
                        data-type="series"
                        checked={type==="series"}
                        onChange={handleFilter}
                    />
                    <label className="form-check-label">Series Only</label>
                </div>
            </div>
        </div>

    )

}
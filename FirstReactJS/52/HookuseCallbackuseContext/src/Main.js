import React from 'react';
import {Button} from "@mui/material";

function Main({toggle}) {
    return (
        <>
            <p>
              Hello from Context
            </p>
            <Button
                variant="contained"
                color = "success"
                onClick={toggle}
            >
                Show alert
            </Button>
        </>
    );
}
export default Main;
import React, {useEffect, useLayoutEffect, useState} from "react";
import "./App.css"
import {Button} from "@mui/material";

export default function App () {

    const [value, setValue] = useState(0);

    useLayoutEffect(() => {
        if (value===0)  {
            setValue(10*Math.random()*200)
        }
    }, [value])

    console.log("render", value)

    return (
        <div className="container app text-center">
            <Button
                variant="outlined"
                onClick={() => setValue(0)}
            >
                {value}
            </Button>
        </div>
    )
}

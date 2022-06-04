import React, {useEffect, useLayoutEffect, useReducer, useRef, useState} from "react";
import "./App.css"
import {Button, TextField} from "@mui/material";
import reducer from "./reducer";

export default function App () {

    const [{r,g,b}, dispatch] = useReducer(reducer, {r:0, g:150, b:200});

    return (
        <div className="container app text-center">
           
        </div>
    )
}

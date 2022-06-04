import React, {useEffect, useLayoutEffect, useReducer, useRef, useState} from "react";
import "./App.css"
import {Button, TextField} from "@mui/material";
import reducer from "./reducer";

export default function App () {

    const [{r,g,b}, dispatch] = useReducer(reducer, {r:0, g:150, b:200});

    return (
        <div className="container app text-center">
            <h1 style={{color: `rgb(${r},${g},${b})`}}>useImperativeHandle Hook</h1>
           <div>
               <span>R</span>
               <Button
                   variant="contained"
                   className="ms-3 mb-3"
                   onClick={()=> dispatch({type: "INCREMENT_R"})}
               >
                   +
               </Button>
               <Button variant="contained" className="ms-3 mb-3" onClick={()=> dispatch({type: "DECREMENT_R"})}
               >-</Button>
           </div>
            <div>
               <span>G</span>
               <Button variant="contained"className="ms-3 mb-3" onClick={()=> dispatch({type: "INCREMENT_G"})}
               >+</Button>
               <Button variant="contained"className="ms-3 mb-3" onClick={()=> dispatch({type: "DECREMENT_G"})}
               >-</Button>
           </div>
            <div>
               <span>B</span>
               <Button variant="contained" className="ms-3 mb-3" onClick={()=> dispatch({type: "INCREMENT_B"})}
               >+</Button>
               <Button variant="contained" className="ms-3 mb-3" onClick={()=> dispatch({type: "DECREMENT_B"})}
               >-</Button>
           </div>
        </div>
    )
}

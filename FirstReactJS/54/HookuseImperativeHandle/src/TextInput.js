import React, {forwardRef, useImperativeHandle, useRef} from "react";
import {TextField} from "@mui/material";

const TextInput = forwardRef((props, ref) => {
    const {hasError, label, value, update} = props;
    console.log(update)
    const inputRef = useRef();


    useImperativeHandle(ref, () => {
        return {
            focus() {
                inputRef.current.focus()
            }
        }
    })

    return (
        <TextField
            inputRef={inputRef}
            value={value}
            onChange={event => update(event.target.value)}
            label={label}
            style={{
                color: hasError ? "error" : "success"
            }}
        />
    )
})
export default TextInput;
import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import "./App.css"
import {Button, TextField} from "@mui/material";
import TextInput from "./TextInput";

export default function App () {

    const [card, setCard] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    const cardEl = useRef();
    const phoneEl = useRef();

    const validate = () => {
        if (card.length < 16) {
            setError("card")
            cardEl.current.focus();
            return;
        }

        if (phone.length < 9) {
            setError("phone")
            phoneEl.current.focus();
            return;
        }

        setError("");
    }

    return (
        <div className="container app text-center">
            <h1>useImperativeHandle</h1>
            <TextInput
              hasError = {error === "card"}
              label = {"Card"}
              update = {setCard}
              value = {card}
              ref={cardEl}
            />
            <TextInput
                hasError = {error === "phone"}
                label = {"Phone"}
                update = {setPhone}
                value = {phone}
                ref={phoneEl}
            />
            <Button
                variant="outlined"
                onClick={validate}
            >
                Send
            </Button>
        </div>
    )
}

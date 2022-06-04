import React, {useState} from "react";
import {Button, ButtonGroup, textFieldClasses} from "@mui/material";
import "./App.css"

function randomNumber () {
    console.log("Calculate")
    return Math.trunc(Math.random()*20)
}

export default function App () {
    // const numberState = useState(0)  // bu yerda numberstate massiv bo'ladi va ikkita elementi bo'ladi (1-0, 2- funksiya)

    const [number, setNumber] = useState(randomNumber)
    //bu yerda number -son, setNumber - funksiya, number o'zgartirish uchun

    const [state, setState] = useState({
        text: "Number",
        date: Date.now()
    });

    function increment () {
        // setNumber(number + 1) - bu yerda setNumber orqali number ga 1 qo'shilyabdi
        // bu funksiyani ikiita yozsak ham lekin bir marta ishlaydi,
        // buning uchun quyidagi funksiyadan foydalanish kerak

        // setNumber((prev) => {
        //     return prev + 1
        // })

        setNumber((prev) => {
            return prev + 1
        })

    }
    function decrement () {
        setNumber(number -1)
    }

    function uploadObject () {
        setState((prev) => {
            return {
                ...prev,
                text: "New Text"
            }
        })
    }

    return (
        <div className="container app text-center">
            <p>Номер: {number}</p>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button onClick={increment} variant="contained" color="success">Добавить</Button>
                <Button onClick={decrement} variant="contained" color="error">Удалить</Button>
            </ButtonGroup>
            <Button
                onClick={uploadObject}
                variant="contained"
            >
                Изменит
            </Button>
            <pre>
                    {JSON.stringify(state, null, 2)}
                </pre>
        </div>
    )
}

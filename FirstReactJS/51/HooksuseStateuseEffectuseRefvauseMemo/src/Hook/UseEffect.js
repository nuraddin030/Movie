import React, {useState, useEffect} from "react";
import "./App.css"
import {Button, ButtonGroup} from "@mui/material";



export default function App () {
    const [user, setUser] =useState("users");
    const [data, setData] = useState([])
    const [position, setPosition] = useState({
        x:0,
        y:0
    })

    // useEffect(() => {
    //     console.log("Render " + user)
    // }, [user])
    // agar [] pustoy bo'lsa faqat birinchi render ishlaydi
    // ager [user] bo'lsa, faqat user o'zgarganda ishlaydi

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${user}`)
            .then(response => response.json())
            .then(json => setData(json))

        return () => {
            console.log('Clean')
        }
    }, [user])

    useEffect(() => {
        window.addEventListener("mousemove", ev => {
            setPosition({
                x:ev.clientX,
                y:ev.clientY
            })
        })
    } ,[])

    return (
        <div className="container app text-center">
            <p> Users: {user} </p>
            <Button
                variant="contained"
                color="success"
                onClick={() => setUser("users")}
            >
                Web Developer
            </Button>
            <Button
                variant="contained"
                color="error"
                onClick={() => setUser("posts")}
            >
                Android developer
            </Button>
            <Button
                variant="contained"
                onClick={() => setUser("todos")}
            >
                IOS developer
            </Button>
            {/*<pre>*/}
            {/*    {JSON.stringify(data, null, 2)}*/}
            {/*</pre>*/}
            <pre>
                {JSON.stringify(position, null, 2)}
            </pre>
        </div>
    )
}

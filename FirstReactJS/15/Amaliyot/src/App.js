import React from "react";
import News from "./News";
import Content from "./Content"

export default function App() {
    const description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
        "Debitis delectus dicta dolor dolorem dolores enim eum impedit sequi tenetur " +
        "velit! Ea itaque porro similique vitae. Dolorem ea excepturi facere fugiat," +
        " impedit mollitia, nam obcaecati officiis reiciendis rerum vero, " +
        "vitae voluptate!"
    return (
        <div>
            <News
                name="BBC News"
                extra="2020"
                text="Najimaddinov Nuriddin"
                header="bigJob"/>
            <Content descr ={description} />
        </div>
    )
}

// JSX da for, while, if-else operatorlarini ishlata olmaymiz
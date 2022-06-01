import React from "react";

export default function Header () {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse d-flex justify-content-between">
                    <a className="navbar-brand" href="#">React</a>
                    <a className="navbar-brand " href="#">Movie</a>
                </div>
            </div>
        </nav>
    )
}
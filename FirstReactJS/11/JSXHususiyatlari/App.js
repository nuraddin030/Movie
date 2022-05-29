
export default function App() {
    function fullName (user) {
        return user.firstName + ' ' + user.lastName
    }
    const user = {
        firstName: "Nuriddin",
        lastName: "Najimaddinov"
    }
    const name = true
    return (
        <div className="App">
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>Hello, {fullName(user)}</p>
            <p>Hello, {(name) ? "Nuriddin" : "Mohira"}</p>
        </div>
    );
}

// JSX da for, while, if-else operatorlarini ishlata olmaymiz
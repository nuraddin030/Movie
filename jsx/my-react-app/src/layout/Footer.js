import style from "../index.css"
export default function Footer () {
    return (
        <footer className="footer">
            <div className="footer-container">
                © {new Date().getFullYear()} Copyright Text
                <a href="#">More Links</a>
            </div>
        </footer>
    )
}
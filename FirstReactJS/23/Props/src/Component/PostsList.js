export default function PostsList (props) {
    const {cb, name} = props
    return (
        <p onClick={cb}>{name}</p>
    )
}
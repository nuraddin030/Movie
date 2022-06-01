import PostsList from "./PostsList";

export default function Posts (props) {
    const {callback} = props
    return (
        <div>
            {props.posts.map(post => (
                <PostsList key = {post.id} name = {post.name} cb = {callback} />
            ))}
        </div>
    )
}
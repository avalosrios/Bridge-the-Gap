import "../styles/Post.css";

export default function Post({ post }) {
  return (
    <div className="post">
      <p>{post.author}</p>
      <h3>{post.title}</h3>
      <img src={post.img} alt="Post Photo" />
    </div>
  );
}

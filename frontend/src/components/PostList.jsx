import "../styles/PostList.css";
import Post from "./Post";

export default function PostList({ posts, onOpen }) {
  if (posts) {
    return (
      <div className="post-container">
        <div className="prompt-box">
          <h3>Weekly Prompt:</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt,
            vero aut? Eos earum officiis nulla accusamus, laborum hic, at
            suscipit itaque minima excepturi odio aspernatur blanditiis
            provident et non. Eius?
          </p>
          <button className="add-post-button" onClick={onOpen}>
            +
          </button>
        </div>

        <div className="post-list">
          {posts.map((post) => {
            return <Post post={post} />;
          })}
        </div>
      </div>
    );
  }

  return (
    <div>
      <p>No post data</p>
    </div>
  );
}

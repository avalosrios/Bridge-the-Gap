import "../styles/PostModal.css";
import { useState } from "react";

const emptyPost = {
  title: "",
  img: "/default_post_pic.png",
  description: "",
};

export default function PostModal({ displayMode, onPost, onClose }) {
  const [newPost, setNewPost] = useState(emptyPost);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setNewPost({
        ...newPost,
        img: `/${event.target.files[0].name}`,
      });
    }
  };

  const handleInputChange = (evt) => {
    setNewPost({
      ...newPost,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onPost(newPost);
    onClose();
  };

  return (
    <section className={displayMode} onSubmit={handleSubmit}>
      <form className="modal-content">
        <span className="close" onClick={onClose}>
          X
        </span>
        <h2>New Post</h2>
        <h4>Name Post:</h4>
        <input
          type="text"
          name="title"
          onChange={handleInputChange}
          value={newPost.title}
          placeholder="New post..."
          required
        />
        <h4>Add Image:</h4>
        <input type="file" className="img-input" onChange={handleFileChange} />
        <h4>Add a description:</h4>
        <textarea
          className="text-input"
          name="description"
          onChange={handleInputChange}
          value={newPost.description}
          placeholder="How did i get here..."
        />
        <br />
        <input type="submit" value="Post It!" className="submit-button" />
      </form>
    </section>
  );
}

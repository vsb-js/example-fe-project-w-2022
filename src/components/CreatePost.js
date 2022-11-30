import { useHistory } from "react-router-dom";
import { apiURL } from "../config";

export default function CreatePost() {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${apiURL}/v1/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author: event.target.author.value,
        title: event.target.title.value,
        text: event.target.text.value,
        date: Date.now() / 1000,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          history.push("/posts");
        } else {
          alert("Failed creating post");
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="author">Author:</label>
        <input type="text" id="author" name="author" />
        <br />
        <br />
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" />
        <br />
        <br />
        <label for="text">Text:</label>
        <textarea id="text" name="text" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let ignore = false;
    fetch("http://localhost:8080/v1/posts")
      .then((streamResponse) => streamResponse.json())
      .then((jsonResponse) => {
        console.log(jsonResponse);
        if (!ignore) {
          setPosts(jsonResponse.posts);
        }
      });
    return () => (ignore = true);
  }, []);

  return (
    <div className="ListPosts">
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
      <Link to="/posts/create">Create new post</Link>
    </div>
  );
}

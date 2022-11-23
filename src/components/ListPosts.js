import { useEffect, useState } from "react";

export default function ListPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let ignore = false;
    fetch("http://localhost:8080/v1/posts")
      .then((streamResponse) => streamResponse.json())
      .then((jsonResponse) => {
        if (!ignore) {
          setPosts(jsonResponse.posts);
        }
      });
    return () => (ignore = true);
  });

  return (
    <div className="ListPosts">
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}

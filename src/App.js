import { useEffect, useState } from "react";

function App() {
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
    <div className="App">
      <ul>
        {posts.map((post) => {
          return <li>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;

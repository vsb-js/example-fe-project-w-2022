import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import Home from "./components/Home";
import ListPosts from "./components/ListPosts";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li key="home">
            <Link to="/">Home</Link>
          </li>
          <li key="posts">
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/posts/create">
            <CreatePost />
          </Route>
          <Route exact path="/posts">
            <ListPosts />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

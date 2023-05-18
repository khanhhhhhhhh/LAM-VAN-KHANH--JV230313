import "./App.css";
import Search from "./components/Search";
import Comment from "./components/Comment";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [comments, setComments] = useState([]);
  const [discoloration, setDiscoloration] = useState(false);
  return (
    <div
      className="App"
    >
      <Header
        discoloration={discoloration}
        setDiscoloration={setDiscoloration}
      ></Header>
      <Search></Search>
      <div className="list_comment">
        <Comment comments={comments} setComments={setComments}></Comment>
      </div>
    </div>
  );
}

export default App;
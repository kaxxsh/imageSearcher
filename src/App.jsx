import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { client } from "./pexels";

function App() {
  const [Getting, setGetting] = useState(null);
  const [Setting, setSetting] = useState({});
  const handlesubmit = () => {
    client.photos.search({ query: Getting, per_page: 30 }).then((photos) => {
      setSetting(...[photos]);
    });
  };
  return (
    <div className="Main">
      <div className="nav">
        <h1>Img-searcher</h1>
        <input
          type="text"
          placeholder="search here...."
          onChange={setGetting((e) => {})}
        />
        <button type="submit" onClick={handlesubmit}>
          Search
        </button>
      </div>
    </div>
  );
}

export default App;

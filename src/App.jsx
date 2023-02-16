import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { client } from "./pexels";

function App() {
  const [Getting, setGetting] = useState(null);
  const [Setting, setSetting] = useState({});
  const handlesubmit = (e) => {
    e.preventDefault();
    client.photos.search({ query: Getting, per_page: 52 }).then((photos) => {
      setSetting(...[photos]);
    });
  };

  return (
    <div className="Main">
      <div className="nav">
        <h1 className="logo"> I M A G E - S E A R C H E R </h1>
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            placeholder="search here...."
            onChange={(e) => setGetting(() => e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      {Getting && (
        <div className="img">
          {Setting.photos?.map((image) => (
            <img src={image.src.small} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

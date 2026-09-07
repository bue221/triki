import React, { useEffect, useState } from "react";
import "./App.css";
import Landing from "./components/Landing";
import PlayPage from "./components/PlayPage";
import { getPath } from "./navigation";

function App() {
  const [path, setPath] = useState(getPath);

  useEffect(() => {
    const onPop = () => setPath(getPath());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  if (path === "/animation") {
    return <PlayPage />;
  }

  return <Landing />;
}

export default App;

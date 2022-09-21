import React, { useEffect, useState } from "react";
import { BrowerRouter, Route, Link } from "react-router-dom";
import Rooms from "./Rooms";

const App = () => {
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    window.onpopstate = (e) => {
      setPageName(e.state);
    };
  }, []);

  const onClick1 = () => {
    const pageName = "page1";
    window.history.pushState(pageName, "", "/page1");
    setPageName(pageName);
  };

  const onClick2 = () => {
    const pageName = "page2";
    window.history.pushState(pageName, "", "/page2");
    setPageName(pageName);
  };

  return (
    <div>
      <button onClick={onClick1}>page1</button>
      <button onClick={onClick2}>page2</button>
      {!pageName && <Home />}
      {pageName === "page1" && <Page1 />}
      {pageName === "page2" && <Page2 />}
    </div>
  );
};

function Home() {
  return <h2>Homepage</h2>;
}
function Page1() {
  return <h2>Page1</h2>;
}
function Page2() {
  return <h2>Page2</h2>;
}

export default App;

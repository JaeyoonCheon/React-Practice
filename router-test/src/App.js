import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Rooms from "./Rooms";

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20, border: "5px solid gray" }}>
        <Link to="/">홈</Link>
        <br />
        <Link to="/photo">사진</Link>
        <br />
        <Link to="/rooms">방 소개</Link>
        <br />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="photo" element={<Photo />}></Route>
          <Route path="rooms/*" element={<Rooms />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return <h2>Homepage</h2>;
}
function Photo() {
  return <h2>Photo</h2>;
}

export default App;

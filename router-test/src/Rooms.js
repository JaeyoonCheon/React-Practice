import React from "react";
import { Routes, Route, Link, useLocation, useParams } from "react-router-dom";

const Rooms = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div>
      <h2>방 소개</h2>
      <Link to="blueroom">파란 방</Link>
      <br />
      <Link to="greenroom">파란 방</Link>
      <br />
      <Routes>
        <Route path="/:roomId" element={<Room />}></Route>
        <Route path="/" element={<h3>방을 선택해 주세요.</h3>}></Route>
      </Routes>
    </div>
  );
};

const Room = () => {
  const a = useParams();
  console.log(a);

  return <h2>{`${a.roomId} 방을 선택하셨습니다.`}</h2>;
};

export default Rooms;

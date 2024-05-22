import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const id = 1;
  return (
    <div>
      <h1>Home</h1>
      <Link to={`/detail/${id}`}>Detail 페이지로 이동</Link>
    </div>
  );
};

export default Home;

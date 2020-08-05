import React from "react";
import { getUserId, getUserName } from "../reducks/users/selectors";
import { useSelector } from "react-redux";

const Home = () => {
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);
  const username = getUserName(selector);

  return (
    <div>
      Hoome
      <h2>ユーザー名: {uid} </h2>
      <h2>ユーザーID: {username} </h2>
    </div>
  );
};

export default Home;

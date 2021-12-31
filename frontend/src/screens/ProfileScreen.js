import React from "react";
import { useSelector } from "react-redux";

export default function ProfileScreen() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <div>{userInfo ? userInfo.name : "No Data found Please Sigin In"}</div>
  );
}

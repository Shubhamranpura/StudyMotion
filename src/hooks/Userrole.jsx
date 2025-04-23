import { useSelector } from "react-redux";
import React from "react";

export default function Userrole() {
  const user = useSelector((state)=>state.profile.user)
  console.log(user?.role)
  return user?.role
}

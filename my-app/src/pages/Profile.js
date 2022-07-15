
import { useSelector, useDispatch } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import { useEffect } from "react"
import {logOutRedux} from "../store/user/actions";
import React from "react";
const Profile = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user);
  const navigate = useNavigate()
  useEffect(() => {
    !user.sessionData.loggedIn ? navigate("/login") : console.log()
  })
  const logOut = () => {
    dispatch(logOutRedux());
    navigate("/login")
  }
  return <><div>
    {user.sessionData.loggedIn ?
      <div className={"mainProfile"}>
        <div className="accountInfo">
        <div className="logOutContainer"><Link to={"/orders"}><button className={"logOutBTN"} >Orders</button></Link></div>
          <span className={"profileItem"}> name: <span className={"profileData"}>{user.users[user.sessionData.email].name}</span> </span>
          <span className={"profileItem"}>lastName: <span className={"profileData"}>{user.users[user.sessionData.email].lastName} </span></span>
          <span className={"profileItem"}>email: <span className={"profileData"}>{user.sessionData.email}</span> </span>
          <span className={"profileItem"}> password: <span className={"profileData"}>{user.sessionData.password}</span></span>
          <span className={"profileItem"}>gender: <span className={"profileData"}>{user.users[user.sessionData.email].gender}</span></span>
         <div className="logOutContainer">
           <button className={"logOutBTN"} onClick={logOut}>logOut</button>
         </div></div>
      </div>
    : null}


  </div>
    </>
}
export default Profile
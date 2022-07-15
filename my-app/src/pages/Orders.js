import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import OrderPageItem from "../components/OrderPageItem";
import NotFoundPage from "../components/NotFoundPage";
;

const Orders = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user);
  const navigate = useNavigate()

  useEffect(() => {
    !user.sessionData.loggedIn ? navigate("/login") : console.log("logged in")
  })


  return (
    <>
    <div className="orders">
      {user.users[user.sessionData.email].orders.length === 0 ? <NotFoundPage link={"/"} text={"You don't have any orders"} /> : null }
      {user.sessionData.loggedIn ?
       <div className={"ordersPage"}>{user.users[user.sessionData.email].orders.map(i => <OrderPageItem orderedDate={i.orderedDate} ID={i.ID} /> ) }</div>
        : <span></span> }
    </div>
    </>
  )

}

export default Orders
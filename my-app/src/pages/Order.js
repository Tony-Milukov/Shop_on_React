import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import OrderItem from "../components/OrderItem";
import { useState } from "react";
;
const Order = (props) => {
  const user = useSelector((state) => state.user);
  let params = useParams()
  const order =  user.users[user.sessionData.email].orders.filter(i =>  i.ID === parseInt(params.ID))[0]
  const [sum,setSum] = useState(0);

  let keys = []

  const randomKey = () => {

    let key = Math.floor(Math.random() * (90000000 - 10) + 10)

    if (keys.length == 0 || keys.map(element => key !== element)) {
      keys = [...keys, key]
      return key

    } else {
      randomKey()
    }
  }
  const getTotalPrice = () => {
    let newSum = 0;
    order.orderedProducts.map(i => newSum += (i.price * i.count))
    setSum(newSum)
    newSum = 0;
  }
  useEffect(() => {
    getTotalPrice()
  },[])

  return (
    <><div className={"order"}>
      <div className="orderDetails">
        <span className={"orderDetailsOuter"} onClick={getTotalPrice}>Ordered on: <span className={"orderDetailsInner"}> {order.orderedDate}</span></span>
        <span className={"orderDetailsOuter"}>Will be deilivered to: <span className={"orderDetailsInner"}>({order.adress.country}) {order.adress.postCode}, {order.adress.city}</span></span>
        <span className={"orderDetailsOuter"}>Status: <span className={"orderDetailsInner"}>{order.status}</span></span>
        <span className={"orderDetailsOuter"}>Total: <span  className={"orderDetailsInner"} >{sum}$</span></span>
      </div>
      <div className="wares-cart">
        {order.orderedProducts.map(i => <OrderItem  key={randomKey()} color={i.color} size={i.size} ID={i.ID} price={i.price} name={i.name} image={i.image} link={`/products/${i.type}/${i.gender}/${i.ID}`} count={i.count}/>)}
      </div>

    </div>

      </>
  )
}
export default Order
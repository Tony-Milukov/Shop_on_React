import { Link } from "react-router-dom";
import React from "react";

const OrderItem = (props) => {

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
  return (
//     filter: drop-shadow(17px 19px 24px rgba(0, 0, 0, 0.13));
//   width: 652px;
//   height: 306px;
//   display: flex;
// }
  <div className="ware-item" key={randomKey()}>
    <Link to={props.link}><img className={"img"} src={props.image} alt="photo"/></Link>
    <div className="about-the-order">
      <h1 className="order-name">{props.name}</h1>
      <span className="price-cart">Price: <span className="price-dollar-cart">{props.price}$</span></span>
      {/*{<div className="size-cart">Size: <span className="size-cart">{props.size}</span></div>}*/}

      {/*{<div className="color-cart">Color: <span className="color-name-cart">{props.color}</span></div>}*/}
      <div className="quantyty-cart">
        <div className="input-quentyty-cart">Quantyty: <span className="quantyty-value-cart">{props.count}</span></div>
      </div>
    </div>
  </div>
  )
}
export default OrderItem
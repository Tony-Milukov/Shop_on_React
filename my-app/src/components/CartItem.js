import {changeQuantity} from "../store/cart/actions"
import React, { useState, useEffect,  } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom"




const CartItem = (props) => {
    const dispatch = useDispatch()
    const cartProducts = useSelector((state) => state.cartProducts.cartProducts);
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


    const [count, setCount] = useState(props.count ? props.count : 1);
    const getCount = (e) => {
        setCount(e.target.value)
        dispatch(changeQuantity(props.ID, e.target.value))
    }
    const removeFromCart = () => {
        dispatch(changeQuantity(props.ID, 0))
    }



    return (
        <div className="ware-item" key={randomKey()}>
            <span onClick={removeFromCart} className={"removeFromCart"}>X</span>
          <Link to={props.link}><img className={"img"} src={props.image} alt="photo"/></Link>
            <div className="about-the-order">

               <h1 className="order-name">{props.name}</h1>
                <span className="price-cart">Price: <span className="price-dollar-cart">{props.price}$</span></span>
                {/*{<div className="size-cart">Size: <span className="size-cart">{props.size}</span></div>}*/}

                {/*{<div className="color-cart">Color: <span className="color-name-cart">{props.color}</span></div>}*/}
                <div className="quantyty-cart">
                    <div className="input-quentyty-cart">Quantyty: <span className="quantyty-value-cart"> <input
                        value={count}
                        onChange={getCount}
                        onInput={props.calculacteSum}
                        min="0" max="999" id="choose-quantyty-cart" type="number"/></span></div>
                </div>
            </div>
        </div>
    )
}
export default CartItem
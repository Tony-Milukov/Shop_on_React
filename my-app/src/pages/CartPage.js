import CartItem from "../components/CartItem"
import {clearCart} from "../store/cart/actions"
import {useDispatch, useSelector,} from "react-redux";
import React, { useState, useEffect } from 'react';
import {createOrder} from "../store/user/actions";
import { useNavigate,Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
;



const CartPage = (props) => {
    const [btnActive,setBtnActive] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [sum,setSum] = useState(0);
    let keys = []
    const [city,setCity] = useState("");
    const [country,setCountry] = useState("");
    const [postCode,setPostCode] = useState(0);
    const date = new Date()

    const randomKey = () => {

        let key = Math.floor(Math.random() * (90000000 - 10) + 10)

        if (keys.length == 0 || keys.map(element => key !== element)) {
            keys = [...keys, key]
            return key

        } else {
            randomKey()
        }
    }
    let cart = []
    const cartProducts = useSelector((state) => state.cartProducts.cartProducts);
    const user = useSelector((state) => state.user);

    const calculacteSum = () => {
        if(cartProducts.length > 0) {
            let newSum = 0
            cartProducts.map(i => newSum += (i.count * i.price))
            setSum(newSum)
            newSum = 0
        }
        else {
            setSum(0)
        }
    }
    useEffect(() => {
        calculacteSum()
    },[cartProducts]);



    const regExpsForInputs = {
        changeCountryReg : /^[A-Za-zА-Яа-я]{1,50}$/,
        changeCityReg : /^[A-Za-zА-Яа-я]{1,50}$/,
        changePostCodeReg : /[0-9]{1,15}/,
    }
    const errors = {
        changeCountryError : "It must contain only letters, 1-50",
        changeCityError: "It must contain only letters, 1-50",
        changePostCodeError : "It must contain only numbers, 1-15",
    }

    const [error,setError] = useState({
        changeCountryError : true,
        changeCityError: true,
        changePostCodeError : true,
    })
    const changeCountry = (e) => {
        if(regExpsForInputs.changeCountryReg.test(e.target.value)) {
            setCountry(e.target.value)
            setError({
                ...error,
                changeCountryError: false
            })

        }
        else {
            setError({
                ...error,
                changeCountryError: true
            })
        }
    }

    const changeCity = (e) => {
        if(regExpsForInputs.changeCityReg.test(e.target.value)) {
            setCity(e.target.value)
            setError({
                ...error,
                changeCityError: false
            })
        }
        else {
            setError({
                ...error,
                changeCityError: true
            })
        }
    }

    const changePostcode = (e) => {
        if(regExpsForInputs.changePostCodeReg.test(parseInt(e.target.value)) && e.target.value >= 1) {
            setPostCode(e.target.value)
            setError({
                ...error,
                changePostCodeError: false
            })
        }
        else {
            setError({
                ...error,
                changePostCodeError: true
            })
        }
    }
       const newOrder = () => {
        if(!user.sessionData.loggedIn) {
            navigate("/login")
        }
        if(Object.values(error).includes(true)) {
               console.log("all inputs are not good")
            setBtnActive(true)
           }
        else {
            setBtnActive(true)

            if (user.sessionData.loggedIn && cartProducts.length !== 0) {
                const successToast = () => {
                    toast.success( <span>Order #{user.ordersIdsCounter} was created</span>, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                successToast()
               let order = {

                   orderedProducts: [],
                   adress: {
                       country: country,
                       city: city,
                       postCode: postCode,
                   },
                   orderedDate: `${date.getDate()}.${(date.getMonth() + 1)}.${date.getFullYear()}`,
                   status: "ordered",
                   ID: user.ordersIdsCounter
               }
                cartProducts.map(i => order.orderedProducts.push(i))
                dispatch(createOrder(user.sessionData.email,order))
               dispatch(clearCart())

            }
        }


    }
    return (
        <>
            <Link className={"toastConainer"} style={{color: "black"}} to={"/orders/"+(user.ordersIdsCounter-1)}>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              className={"toastConainer"}
            />
        </Link>
            <main className="main-cart">
                <div className="flex-cart">
                    <div className="wares-cart">
                        {cartProducts.map(i => <CartItem key={randomKey()}   calculacteSum color={i.color} size={i.size} ID={i.ID} price={i.price} name={i.name} image={i.image} link={`/products/${i.type}/${i.gender}/${i.ID}`} count={i.count}/>)}
                        <div className="btns-cart">
                            {cartProducts.length > 0 ?  <button onClick={() => dispatch(clearCart())} className="clear-shopping-cart">clear shopping cart</button> : null}
                        </div>
                    </div>
                </div>
                <div className="inputs-shipping-adress">

                    <input onInput={changeCountry} type="text" id="inputs-cart" placeholder="Country"/>
                    <span className="errorMSG_">{error.changeCountryError  && btnActive ? errors.changeCountryError : ""}</span>

                        <input onInput={changeCity} type="text" id="inputs-cart" placeholder="city"/>
                    <span className="errorMSG_">{error.changeCityError  && btnActive ? errors.changeCityError : ""}</span>
                            <input min="0" max="999" onInput={changePostcode} type="number" id="inputs-cart" placeholder="Postcode / Zip"/>
                    <span className="errorMSG_">{error.changePostCodeError  && btnActive ? errors.changePostCodeError : ""}</span>
                                <div className="proceed-to-checkout">
                                    <p className="sub-total-p">sub total<span className="sub-total">${sum}</span></p>
                                    <p className="grand-total-p">Grand total<span className="grand-total">${sum}</span></p>
                                    <div className="line-shipping"></div>
                                    <button className="procced-btn" onClick={newOrder}>proceed to checkout</button>

                                </div>
                </div>


        <div/>
</main>



        </>
    )
}
export default CartPage
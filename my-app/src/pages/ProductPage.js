import img from "../imgs/woman-product.png"
import React from 'react';
import {Link} from "react-router-dom"

import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../store/cart/actions"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductPage = (props) =>{

    const dispatch = useDispatch()
    const successToast = () => {
        toast.success( <span className={"capitalize"}>«{props.name}» added to cart</span>, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    const {cartProducts} = useSelector((state) => state.cartProducts)
    let images = [props.image,...props.images]
    let [counter,setCounter] = useState(0)
    const nextImage = () => {
        if(counter < [images.length-1]) {
            setCounter(counter+1)

        }
        else if (counter == [images.length-1]) {
            setCounter(0)
        }

    }
    const previousPicture = () => {
        if(counter !== 0 ) {
            setCounter(counter-1)
        }
       else if(counter == 0) {
            setCounter([images.length-1])
        }
    }

    return <>

        <Link className={"toastConainer"} style={{color: "black"}} to="/cart">
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
        <div className="container-prod">
            <main style={{backgroundImage: `src(${images[counter]})`}} className="main-product">
                <button onClick={previousPicture} className="btn-product btn-left-product">></button>
                <img src={images[counter]} alt="img"/>
                <button onClick={nextImage} className="btn-product btn-right-product"> > </button>


            </main>
            <div className="container">
                <section >
                    <section className="productsContent">
                        <h3 className="productsContentH3">{props.gender} collection</h3>
                        <h2 className="productsContentH2">{props.name}</h2>
                        <p className="productsContentP">{props.description !== "" ? props.description : "Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals."}</p><p className="price-561">{props.price}$</p>
                        <div className="hr"></div>
                        <button onClick={() => {
                            dispatch(addToCart(props.ID,props.gender,props.type,props.name,props.price,props.image,props.size,props.color));
                            successToast()
                        }} className="btn-add-to-card"><span
                            className="btn-text">Add to Cart</span></button>
                    </section>

                </section>
            </div>
            <div className="container-products">
                <div className="cards cards-products">

                    </div>
                </div>
        </div>

            </>
        }
export default ProductPage
export const ADD_TO_CART = "::ADD_TO_CART::"
export const CLEAR_CART = "::CLEAR_CART::"
export const CHANGE_QUANITY = "::CHANGE_QUANTITY::"


export const addToCart = (ID,gender,type,name,price,image,size,color) => {
    return {
        type: ADD_TO_CART,
        payload: {ID,gender,type,name,price,image,size,color}
    }
}
export const clearCart = () => {
    return {
        type: CLEAR_CART,
    }
}
export const changeQuantity = (ID,quantity) => {
    return {
        type: CHANGE_QUANITY,
        payload: {ID,quantity}
    }
}
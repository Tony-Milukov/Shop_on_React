import {ADD_TO_CART,CLEAR_CART,CHANGE_QUANITY} from "./actions"


const initialState = {
    cartProducts : []
}
// {
//     ID: "1",
//     name: "chain",
//     price: 200,
//     gender: "man",
//     type: "accessories",
// }

export const cartReducer = (state = initialState, action) => {
    const changeCount = () => {
        if(action.payload.quantity == 0) {
            state.cartProducts.forEach((item,i,arr) => {
                return ((item.ID === action.payload.ID) ?
                    state.cartProducts.splice(i,1)  : state)
            })
        }
        else if(action.payload.quantity >= 1) {
            state.cartProducts.forEach((item,i,arr) => {
                return ((item.ID === action.payload.ID) ?
                    state.cartProducts[i] =  {
                        ID: `${state.cartProducts[i].ID}`,
                        name: `${state.cartProducts[i].name}`,
                        gender: `${state.cartProducts[i].gender}`,
                        type: `${state.cartProducts[i].type}`,
                        price: `${state.cartProducts[i].price}`,
                        count:  parseInt(action.payload.quantity),
                        image: `${state.cartProducts[i].image}`,
                        size: `${state.cartProducts[i].size}`,
                        color: `${state.cartProducts[i].color}`

                    }  : state)
            })
        }

    }
    const getCartsProducts = () => {
        let filtered = state.cartProducts.filter(i => i.ID === action.payload.ID)

        if(filtered.length == 0 ) {
            return {
                ...state,
                cartProducts:  [
                    ...state.cartProducts,
                    {
                        ID: `${action.payload.ID}`,
                        name: `${action.payload.name}`,
                        gender: `${action.payload.gender}`,
                        type: `${action.payload.type}`,
                        price: `${action.payload.price}`,
                        count:  1,
                        image: `${action.payload.image}`,
                        size: `${action.payload.size}`,
                        color: `${action.payload.color}`
                    }
                ]
            }
        }
         if(filtered.length == 1) {
           const addToCart = () => {
                state.cartProducts.forEach((item,i,arr) => {
                  return  ((item.ID === action.payload.ID) ?
                         state.cartProducts[i] =  {
                         ID: `${action.payload.ID}`,
                         name: `${action.payload.name}`,
                         gender: `${action.payload.gender}`,
                         type: `${action.payload.type}`,
                         price: `${action.payload.price}`,
                         count:  state.cartProducts[i].count +1,
                         image: `${action.payload.image}`,
                             size: `${action.payload.size}`,
                             color: `${action.payload.color}`

                         }  : state)
                })
            }
           addToCart()
            return {
                ...state,
                cartProducts:  [
                    ...state.cartProducts,
                ]
            }
        }
    }
    switch (action.type) {
        case ADD_TO_CART:
            return getCartsProducts()
        case CLEAR_CART:
            return {
                cartProducts: []
            }
        case CHANGE_QUANITY:
            changeCount()
            return  {
            ...state,
            cartProducts:  [
                ...state.cartProducts,
            ]

        }
        default:
            return state
    }
}
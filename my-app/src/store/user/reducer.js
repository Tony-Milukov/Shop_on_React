import { CREATE_NEW_USER,LOG_IN,LOG_OUT,CREATE_ORDER} from "./actions"

// {
//         orderTime: time
//     orderedProducts: [
//               {product},
//               {product},
//               {product},
//               {product},
//     ],
//      adress: {
//          country: country,
//          city: city,
//          postcode: postcode
//   }
//         status: "ordered", //Statuses "ordered" => in delivery => delivered
// }

// type sessionData: {
//     loggedIn: true,
//     email: email,
//     password: password,
// }
const initialState = {
        ordersIdsCounter: 0,
        sessionData: { loggedIn: false } , //email and password of this session, like cookies
        users: {
        }

}
export const userReducer = (state = initialState, action) => {

    switch (action.type) {
      case CREATE_NEW_USER:
        return  {
          ...state,
          users: {
            ...state.users,
            [action.payload.email]: {
              orders: [],
              name: `${action.payload.firsName}`,
              password: `${action.payload.password}`,
              lastName: `${action.payload.lastName}`,
              gender: `${action.payload.gender}`
            }
          }
        }
      case LOG_IN:
        return {
          ...state,
          sessionData: {
            ...state.sessionData,
            loggedIn: true,
            email: `${action.payload.email}`,
            password: `${action.payload.password}`

          }
        }
      case  LOG_OUT:
      return {
        ...state,
        sessionData: {}

      }
      case CREATE_ORDER:
        return {
          ...state,
          ordersIdsCounter: state.ordersIdsCounter+1,
          users: {
            ...state.users,
            [action.payload.email] : {
              ...state.users[action.payload.email],
              orders: [
                ...state.users[action.payload.email].orders,
                action.payload.cart
              ]
            }
          }

                }
        default:
            return state
    }
}

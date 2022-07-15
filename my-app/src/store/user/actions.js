export const CREATE_NEW_USER = "::CREATE_NEW_USER::";
export const LOG_IN = "::LOG_IN::"
export const LOG_OUT = "::LOG_OUT::"
export const CREATE_ORDER = "::CREATE_ORDER::"

export const createNewUser = (password,email,gender,firsName,lastName) => {
  return {
    type: CREATE_NEW_USER,
    payload: {password,email,gender,firsName,lastName}
  }
}
export const logInRedux = (password,email) => {
 return { type: LOG_IN,
   payload: {email,password}
 }
}
export const logOutRedux = () => {
  return {
    type: LOG_OUT
  }
}
export const createOrder = (email,cart) => {
  return {
    type: CREATE_ORDER,
    payload: {email,cart}
  }
}
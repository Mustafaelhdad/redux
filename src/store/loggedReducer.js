//REDUCER
const initialState = {
  logged: false
}

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        logged: true
      }
    case "LOGOUT":
      return {
        ...state,
        logged: false 
      }
    default:
      return state
  }
}

export default counter
//REDUCER
const initialState = {
  count: 0
}

const logging = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        count: state.count + action.payload
      }
    case "DEC":
      return {
        ...state,
        count: state.count - action.payload
      }
    default:
      return state
  }
}

export default logging
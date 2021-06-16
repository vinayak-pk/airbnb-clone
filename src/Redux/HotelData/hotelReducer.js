import { GET_DATA_SUCCESSFULLY } from './actionType'

const initState = {
  data:[],
}
export const hotelReducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_DATA_SUCCESSFULLY:
      return {
        ...state,
        data: payload,
    
      }
    default:
      return state
  }
}

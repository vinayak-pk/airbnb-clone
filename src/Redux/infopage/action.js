import {NETWORK_REQUEST,REQUEST_FAILURE,REQUEST_SUCCESS} from "./action_type"
import axios from "axios"
export function network_request(){
    return {
        type:NETWORK_REQUEST
    }
}

export function request_success(payload){
    return {
        type:REQUEST_SUCCESS,
        payload:payload
    }
}

export function request_failure(){
    return {
        type:REQUEST_FAILURE
    }
}

export const getData=(id)=>(dispatch)=>{
  return axios.get(`https://mock-server2.herokuapp.com/rooms/${id}`)
   .then(res=>dispatch(request_success(res.data)))
   .catch(res=>dispatch(request_failure))
}
import {NETWORK_REQUEST,REQUEST_FAILURE,REQUEST_SUCCESS} from "./action_type"

const initstate = {
    data:{},
    isLoading:true,
    isError:false
}

export const reducer = (state=initstate,{type,payload})=>{
    switch(type){
        case NETWORK_REQUEST:
            return{
                ...state,isLoading:true
            }
        case REQUEST_SUCCESS:
            return{
                ...state,data:{...payload},isLoading:false,isError:false
            }
        case REQUEST_FAILURE:
            return{
                ...state,isLoading:false,isError:true
            }

        default:{
            return state
        }
    }
}
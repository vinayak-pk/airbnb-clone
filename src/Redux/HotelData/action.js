import { GET_DATA_SUCCESSFULLY} from "./actionType"
import axios from "axios"

const getData=(payload)=>
{
    return{
        type:GET_DATA_SUCCESSFULLY,
        payload:payload
    }

}
export const getHotelData=(payload)=>(dispatch)=>
{
    const requestParam = {
        url: "http://localhost:2244/hotel",
        method: "get",
        params: payload
      };
      axios(requestParam)
        .then((response) =>{
          dispatch(getData(response.data.data));
          console.log(response.data.data)
        })
        .catch((err) => console.log(err));
}
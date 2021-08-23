import { hotelReducer } from "./HotelData/hotelReducer"
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { reducer as NavBarReducer } from "./NavBar/reducer";
import {reducer as InfoReducer} from "./Infopage/reducer"
import thunk from "redux-thunk";

const rootReducer=combineReducers({
    hotel:hotelReducer,
    Navbar: NavBarReducer,
    info: InfoReducer
})

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
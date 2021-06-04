import {createStore,applyMiddleware} from "redux"
import Thunk from "redux-thunk"
import {reducer as inforeducer} from "./infopage/reducer"

let rootReducer = combineReducers({info:inforeducer})

export const store = createStore(rootReducer,applyMiddleware(Thunk));
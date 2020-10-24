import { combineReducers } from "redux";
import mobileReducer from "./mobile-reducer/mobile-reducer";


const rootReducer = combineReducers({
    toggle: mobileReducer,
})

export default rootReducer;
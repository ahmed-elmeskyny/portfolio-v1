import { combineReducers } from "redux";
import mobileReducer from "./mobile-reducer/mobile-reducer";
import preloaderReducer from "./preloader-reducer/preloader-reducer";


const rootReducer = combineReducers({
    toggle: mobileReducer,
    active: preloaderReducer,
})

export default rootReducer;
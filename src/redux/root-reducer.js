import { combineReducers } from "redux";
import mobileReducer from "./mobile-reducer/mobile-reducer";
import preloaderReducer from "./preloader-reducer/preloader-reducer";
import projectsReducer from "./projects-reducer/projects-reducer";


const rootReducer = combineReducers({
    toggle: mobileReducer,
    active: preloaderReducer,
    projects: projectsReducer,
})

export default rootReducer;
const INITIALE_STATE = {
    active: true,
}


const preloaderReducer = (state = INITIALE_STATE, action) => {
    switch (action.type) {
        case "IS_ACTIVE":
            return {
                active: !state.active,
            }
        default:
            return state;
    }
};

export default preloaderReducer;
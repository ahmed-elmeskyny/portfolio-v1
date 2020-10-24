const INITIALE_STATE = {
    open: false,
};


const mobileReducer = (state = INITIALE_STATE, action) => {
    switch (action.type) {
        case "TOGGLE_OPEN":
            return {
                open: !state.open,
            }
        default:
            return state;
    }
};

export default mobileReducer;
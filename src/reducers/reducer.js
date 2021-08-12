
const initialState = {
    loading: false,
    temps: [],
    errorMessage: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_TEMPS":
            return{
                ...state,
                loading: true
            }
        case "LOAD_TEMPS_SUCCESS":
            return{
                ...state,
                temps: action.payload,
                loading: false
            }
        case "LOAD_TEMPS_FAIL":
            return{
                ...state,
                loading: false,
                errorMessage:action.payload
            }
        default:
            return state;
    }
};

export default reducer;
import * as actionTypes from '../actions';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ value: action.payload.result, id: new Date() })
            };
        case actionTypes.DELETE_RESULT:
            return {
                ...state,
                results: state.results.filter(item => item.id !== action.payload.id)
            };
        default: return state
    }
};

export default reducer;
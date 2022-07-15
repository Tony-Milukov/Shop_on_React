import SEARCH_ACTION from "./actions"
const initialState = {
    searchLine : ""
}
export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_ACTION :
            return {
                ...initialState,
                searchLine: action.payload.searchLine
            }
        default:
            return state
    }
}
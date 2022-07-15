const SEARCH_ACTION = "::SEARCH_ACTION::"

export const updateSearch = (searchLine) => {
    return {
        type: SEARCH_ACTION,
        payload: {searchLine}
    }
}
export default SEARCH_ACTION
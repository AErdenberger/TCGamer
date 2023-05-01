
export const SET_SEARCH_BAR_TEXT = 'searchBar/SET_SEARCH_BAR_TEXT';

export const setSearchBarText = searchBarText => ({
    type: SET_SEARCH_BAR_TEXT,
    searchBarText
})

export const getSearchBarText = () => (state) => {
    return state.searchBarText ? state.searchBarText : "" ;
}

const searchBarTextReducer = (state = {}, action) => {
    let nextState = {...state};
    switch(action.type){
        case SET_SEARCH_BAR_TEXT:
            return {...nextState, ["searchBarText"]: action.searchBarText}
        default:
            return state;
    }
}

export default searchBarTextReducer;
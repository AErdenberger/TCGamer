import csrfFetch from "./csrf"

export const RECEIVE_COMMENTS = 'comments/RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'comments/RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'comments/REMOVE_COMMENT';

export const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    payload: comments
})

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    payload: comment
})

export const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    payload: commentId
})

export const getComment = (commentId) => (state) => {
    return state.comment ? state.cartItem[commentId] : null;
}

export const getComments = (state) => {
    return state.comments ? Object.values(state.comments) : [];
}

export const fetchComments = () => async dispatch => {
    let res = await csrfFetch('/api/comments');
    if(res.ok){
        let data = await res.json();
        return dispatch(receiveComments(data))
    }
}

export const fetchCardComments = (cardId) => async dispatch => {
    let res = await csrfFetch(`/api/comments?cardId=${cardId}`)
    if(res.ok){
        let data = await res.json();
        return dispatch(receiveComments(data))
    }
}

export const fetchComment = (commentId) => async dispatch => {
    let res = await csrfFetch(`/api/comments/${commentId}`);
    if(res.ok){
        let data = await res.json();
        return dispatch(receiveComment(data))
    }
}

export const createComment = (comment) => async dispatch => {
    let res = await csrfFetch('/api/comments/', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(comment)
    });
    if (res.ok){
        let data = await res.json();
        return dispatch(receiveComment(data))
    }
}

export const updateComment = (comment) => async dispatch => {
    let res = await csrfFetch(`/api/comments/${comment.id}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(comment)
    });
    if (res.ok) {
        let data = await res.json();
        return dispatch(receiveCartItem(data))
    }
}

export const deleteComment = (commentId) => async dispatch => {
    await csrfFetch (`/api/comments/${commentId}`, {
        method: 'DELETE'
    })
    return dispatch(removeC(cartItemId))
}

const commentsReducer = (state = {}, action) => {
    let nextState = {...state};
    switch(action.type){
        case RECEIVE_COMMENTS:
            return {...action.payload.comments}
        case RECEIVE_COMMENT:
            return {...nextState, [action.payload.comment.id]: action.payload.comment}
        case REMOVE_COMMENT:
            delete nextState[action.payload]
            return {...nextState}
        default:
            return state
    }
}

export default commentsReducer
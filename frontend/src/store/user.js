import csrfFetch from "./csrf";

export const RECEIVE_USER = "user/RECEIVE_USER";
export const RECEIVE_USERS = "user/RECEIVE_USERS";

export const receiveUser = user => ({
    type: RECEIVE_USER,
    payload: user
})

export const receiveUsers = users => ({
    type: RECEIVE_USERS,
    payload: users
})

export const getUser = (userId) => (state) => {
    return state.users ? state.user[userId] : null;
}

export const getUsers = () => (state) => {
    return state.users ? Object.values(state.users) : [];
}

export const fetchUsers = () => async dispatch => {
    let res = await csrfFetch('/api/users');
    if (res.ok){
        let data = await res.json();
        return dispatch(receiveUsers(data))
    }
}

export const fetchUser = (userId) => async dispatch => {
    let res = await csrfFetch(`/api/users/${userId}`);
    if (res.ok){
        let data = await res.json();
        return dispatch(receiveUser(data))
    }
}

const userReducer = (state = {}, action) => {
    let nextState = {...state};
    switch(action.type){
        case RECEIVE_USERS:
            return {...action.payload.users}
        case RECEIVE_USER:
            return {...nextState, [action.payload.user.id]: action.payload.user}
        default:
            return state;
    }
}

export default userReducer;
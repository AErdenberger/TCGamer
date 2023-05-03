import csrfFetch from "./csrf"

export const RECEIVE_CARTITEMS = 'cart_items/RECEIVE_CARTITEMS'
export const RECEIVE_CARTITEM = 'cart_items/RECEIVE_CARTITEM'
export const REMOVE_CARTITEM = 'cart_items/REMOVE_CARTITEM'

export const receiveCartItems = cartItems => ({
    type: RECEIVE_CARTITEMS,
    payload: cartItems
})

export const receiveCartItem = cartItem => ({
    type: RECEIVE_CARTITEM,
    payload: cartItem
})

export const removeCartItem = cartItemId => ({
    type: REMOVE_CARTITEM,
    cartItemId
})

export const getCartItem = (itemId) => (state) => {
    return state.cartItem ? state.cartItem[itemId] : null;
}

export const getCartItems = (state) => {
    return state.cartItems ? Object.values(state.cartItems) : [];
}

export const fetchCartItems = () => async dispatch => {
    let res = await csrfFetch('/api/cart_items');
    if(res.ok){
        let data = await res.json();
        return dispatch(receiveCartItems(data))
    }
}

export const fetchCartItem = (itemId) => async dispatch => {
    let res = await csrfFetch(`/api/cart_items/${itemId}`);
    if(res.ok){
        let data = await res.json();
        return dispatch(receiveCartItem(data))
    }
}

export const createCartItem = (item) => async dispatch => {
    let res = await csrfFetch('/api/cart_items/', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(item)
    });
    if (res.ok){
        let data = await res.json();
        return dispatch(receiveCartItem(data))
    }
}

export const updateCartItem = (item) => async dispatch => {
    let res = await csrfFetch(`/api/cart_items/${item.id}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(item)
    });
    if (res.ok) {
        let data = await res.json();
        return dispatch(receiveCartItem(data))
    }
}

export const deleteCartItem = (cartItemId) => async dispatch => {
    await csrfFetch (`/api/repots/${cartItemId}`, {
        method: 'DELETE'
    })
    return dispatch(removeCartItem(cartItemId))
}

const cartItemReducer = (state = {}, action) => {
    let nextState = {...state};
    switch(action.type){
        case RECEIVE_CARTITEMS:
            return {...action.payload.cartItems}
        case RECEIVE_CARTITEM:
            return {...nextState, [action.payload.cartItem.id]: action.payload.cartItem}
        case REMOVE_CARTITEM:
            delete nextState[action.cartItem]
            return nextState
        default:
            return state;
    }
}

export default cartItemReducer
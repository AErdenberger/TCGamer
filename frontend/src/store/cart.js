const ADD_ITEM = 'cart/ADD_ITEM';
const REMOVE_ITEM = 'cart/REMOVE_ITEM';
const UPDATE_COUNT = 'cart/UPDATE_COUNT';
const RESET_CART = 'cart/RESET_CART';

export const addItem = itemId => ({
    type: ADD_ITEM,
    itemId
});

export const removeItem = itemId => ({
    type: REMOVE_ITEM,
    itemId
});


export const updateCount = (itemId, count) => {
    if (count < 1) return removeItem(itemId);
    return {
        type: UPDATE_COUNT,
        itemId,
        count
    }
}

export const reset = () => ({
    type: RESET_CART
})

export const getCartItem = (itemId) => (state) => {
    return state.cartItem ? state.cartItem[itemId] : null;
}

export const getCards = (state) => {
    return state.cartItems ? Object.values(state.cartItems) : [];
}
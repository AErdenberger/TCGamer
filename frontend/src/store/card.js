import csrfFetch from "./csrf"
import { RECEIVE_CARTITEMS } from "./cart";

export const RECEIVE_CARDS = 'cards/RECEIVE_CARDS';
export const RECEIVE_CARD = 'cards/RECEIVE_CARD';

export const receiveCards = cards => ({
    type: RECEIVE_CARDS,
    cards
})

export const receiveCard = card => ({
    type: RECEIVE_CARD,
    card
})

export const getCard = (cardId) => (state) => {
    return state.cards ? state.cards[cardId] : null;
}

export const getCards = (state) => {
    return state.cards ? Object.values(state.cards) : [];
}

export const fetchCards = () => async dispatch => {
    let res = await csrfFetch('/api/cards');
    if (res.ok){
        let { cards } = await res.json();
        return dispatch(receiveCards(cards))
    }
}

export const fetchCardsByGameName = (cardGameName) => async dispatch => {
    let res = await csrfFetch(`/api/cards?cardGameName=${cardGameName}`);
    if (res.ok){
        let { cards } = await res.json();
        return dispatch(receiveCards(cards))
    }
}

export const fetchCard = (cardId) => async dispatch => {
    let res = await csrfFetch(`/api/cards/${cardId}`);
    if (res.ok){
        let { card } = await res.json();
        return dispatch(receiveCard(card))
    }
}

const cardsReducer = (state = {}, action) => {
    let nextState = {...state};
    switch(action.type){
        case RECEIVE_CARDS:
            return  {...action.cards}
        case RECEIVE_CARD:
            return {...nextState, [action.card.id]: action.card}
        case RECEIVE_CARTITEMS:
            return {...nextState, ...action.payload.cards}
        default:
            return state;
    }
}

export default cardsReducer
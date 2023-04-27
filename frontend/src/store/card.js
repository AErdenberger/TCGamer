
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
    let res = await fetch('/api/cards');
    if (res.ok){
        let { cards } = await res.json();
        return dispatch(receiveCards(cards))
    }
}

export const fetchCard = (cardId) => async dispatch => {
    let res = await fetch(`/api/cards/${cardId}`);
    if (res.ok){
        let data = await res.json();
        return dispatch(receiveCard(data))
    }
}

const cardsReducer = (state = {}, action) => {
    let nextState = {...state};
    switch(action.type){
        case RECEIVE_CARDS:
            return {...nextState, ...action.cards}
        case RECEIVE_CARD:
            return {...nextState, [action.card.id]: action.card}
        default:
            return state;
    }
}

export default cardsReducer
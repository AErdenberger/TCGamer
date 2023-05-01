import React, { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { getCards, fetchCards, fetchCardsByGameName } from "../../store/card";
import CardTile from "./CardTile";
import './cardImage.css';

function CardIndex(props){
    const dispatch = useDispatch();
    const cards = useSelector(getCards);
    const { cardGameName } = useParams();

    useEffect(() => {
        if (cardGameName){
            dispatch(fetchCardsByGameName(cardGameName))
        } else {
            dispatch(fetchCards(cards));
        }
    }, [dispatch, cardGameName])

    
    function filterCards(cards, isOnlyPokemon) {
        return cards.filter(card => {
            let startsWithSearchBarText = false;
            if (!props.searchBarText) {
                startsWithSearchBarText = true;
            } else {
                startsWithSearchBarText = card.name.startsWith(props.searchBarText);
            }

            let isPokemonCard = card.game === "Pokemon";
            if (isOnlyPokemon) {
                return startsWithSearchBarText && isPokemonCard;
            } else {
                return startsWithSearchBarText;
            }
        });
    }
    
    return (
        <div>
            <ul className="AllTheCards">
                {
                filterCards(cards, false).map( card => {
                    return <CardTile key={card.id} card={card} />
                })}
            </ul>
        </div>
    )
};

const mapStateToProps = function(state) {
    return {
        searchBarText: state.searchBar.searchBarText
    }
}

export default connect(mapStateToProps)(CardIndex);
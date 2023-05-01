import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getCards, fetchCards } from "../../store/card";
import CardTile from "./CardTile";
import './cardImage.css';

function CardIndex(props){
    const dispatch = useDispatch();
    const cards = useSelector(getCards);

    useEffect(() => {
        dispatch(fetchCards(cards));
    }, [dispatch])

    
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
    /**
     * Goal: Create a checkbox, that when selected, only shows Pokemon cards
     * 
     * UI component to check and uncheck this box
     * 
     * setter action for the select  box values
     * 
     * reducer for the select box values
     * 
     * selector for the checkbox values
     * 
     * map game checkbox state into props, so that we have the values and component re-renders on change 
     * 
     * in filterCards method, if one of the game checkboxes is true, filter down to just those cards as well 
     */
    
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
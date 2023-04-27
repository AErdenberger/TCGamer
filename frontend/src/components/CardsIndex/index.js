import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCards, fetchCards } from "../../store/card";
import CardTile from "./CardTile";
import './cardImage.css';

function CardIndex(){
    const dispatch = useDispatch();
    const cards = useSelector(getCards);

    useEffect(() => {
        dispatch(fetchCards(cards));
    }, [dispatch])

    return (
        <div>
            <ul className="AllTheCards">
                {cards.map( card => {
                    return <CardTile key={card.id} card={card} />
                })}
            </ul>
        </div>
    )
};

export default CardIndex;
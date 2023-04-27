import React from "react";
import { getCard, fetchCard } from "../../store/card";
import { useSelector, useDispatch } from "react-redux";
import './cardImage.css';

function CardTile(props) {
    const { card } = props;

    //display the image, name, game, set, and price of the card
    //on click link to the card's individual page
    return (
        <div className="cardTile">
            <div><img className="cardImages" src={card.photo}/></div>
            <h1 className="cardName">{card.name}</h1>
            <ul>
                <li>{card.game}</li>
                <li>{card.set}</li>
                <li>{card.price}</li>
            </ul>
        </div>
    )

}

export default CardTile;
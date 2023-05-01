import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { getCard, fetchCard } from "../../store/card";
import { useSelector, useDispatch } from "react-redux";
import './cardImage.css';

function CardTile(props) {
    const { card } = props;

    //display the image, name, game, set, and price of the card
    //on click link to the card's individual page

    const handleClick = e => {
        e.preventDefault();

    }

    return (
        <Link to={`/cards/${card.id}`}>
            <div className="cardTile" >
                <div>
                    <img className="cardImages" src={card.photo}/>
                </div>
                <h1 className="cardName">{card.name}</h1>
                <ul>
                    <li>{card.game}</li>
                    <li>{card.set}</li>
                    <li>{card.price}</li>
                </ul>
            </div>
        </Link>
    )

}

export default CardTile;
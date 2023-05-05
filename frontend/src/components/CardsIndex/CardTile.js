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

    let cardPrice = parseFloat(card.price).toFixed(2);

    return (
        <Link to={`/cards/${card.id}`}>
            <div className="cardTile" >
                <div>
                    <img className="cardImages" src={card.photo}/>
                </div>
                <div className="CardNameAndData">
                    <h1 className="cardName">{card.name}</h1>
                    <ul className="CardTileData">
                        <li>{card.game}</li>
                        <li>{card.set}</li>
                        <li>Price: ${cardPrice}</li>
                    </ul>
                </div>
            </div>
        </Link>
    )

}

export default CardTile;
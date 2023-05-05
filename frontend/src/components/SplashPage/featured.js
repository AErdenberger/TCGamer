import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { getCards } from "../../store/card";
import "./index.css"

function FeaturedCards() {
    const cards = useSelector(getCards);

    const shuffled = cards.sort(() => 0.5 - Math.random())
    let selected = shuffled.slice(0, 5);

    return (
        <div className="featuredList">
            <ul>
                {selected.map(card => {
                    return (
                        <Link to={`/cards/${card.id}`} key={card.id}>
                            <div className="featuredSideBar" >
                                <h1>{card?.name}</h1>
                                <img className="featuredPhoto" src={card?.photo}></img>
                                <p>Price: {parseFloat(card.price).toFixed(2)}</p>
                            </div>
                        </Link>
                    )
                })}
            </ul>
        </div>
    )
}

export default FeaturedCards;
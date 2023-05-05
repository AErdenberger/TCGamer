import React from "react";
import { useSelector } from "react-redux";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import { getCards } from "../../store/card";
import CardTile from "../CardsIndex/CardTile";

function ExpensiveSlideshow() {
    const cards = useSelector(getCards);

    let priceSorted = cards.sort((cardA, cardB) => {
        return parseFloat(cardB.price) - parseFloat(cardA.price)
    })

    const topFive = priceSorted.slice(0, 5);

    return (
        <div className="frontPageCardTiles">
            <ul className="topFive">
                {topFive.map(card => {
                    return <CardTile key={card.id} card={card} />
                })}
            </ul>
        </div>
    )
}

export default ExpensiveSlideshow
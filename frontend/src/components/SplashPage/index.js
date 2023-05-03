import React, { useEffect } from "react";
import FeaturedCards from "./featured";
import "./index.css"
import { useDispatch, useSelector } from "react-redux";
import { getCards, fetchCards } from "../../store/card";
import ExpensiveSlideshow from "./slideshow";

function SplashPage() {
    const dispatch = useDispatch();
    const cards = useSelector(getCards);


    useEffect(() => {
        dispatch(fetchCards(cards))
    }, [])

    return (
        <div className="TheWholeShabang">
            <div className="splashHeader">
                <img src="/TCGGamerLogo.png"></img>
                <h1>Welcome to TCGamer.com</h1>
                <p>Your one-stop shop for everything Pokemon, YuGiOh, and Magic: the Gathering.</p>
            </div>
            <div className="cardLinks">
                <div className="featuredCards">
                    <h1>Featured Cards</h1>
                    <FeaturedCards />
                </div>
                <div className="bigSpenders">
                    <h1>Big Spenders</h1>
                    <ExpensiveSlideshow />
                </div>
            </div>
        </div>
    )

}

export default SplashPage;
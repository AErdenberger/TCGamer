import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCard, fetchCard } from "../../store/card";
import "./index.css"

function CardShow(){

    const { cardId } = useParams();
    const dispatch = useDispatch();
    const card = useSelector(getCard(cardId))

    useEffect(() => {
        dispatch(fetchCard(cardId))
    }, [cardId, dispatch])

    return(
        <div className="TheWholeCardShow">
            <img className="CardShowImage" src={card?.photo}></img>
            <h1 className="CardShowName">{card?.name}</h1>
            <ul className="CardShowData">
                <li>{card?.game}</li>
                <li>{card?.set}</li>
                <li>{card?.price}</li>
            </ul>
            <Link className="LinkBack" to='/cards'>Return to Cards Page</Link>
        </div>
    )

}

export default CardShow
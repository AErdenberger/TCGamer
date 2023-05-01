import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCard, fetchCard } from "../../store/card";

function CardShow(){

    const { cardId } = useParams();
    const dispatch = useDispatch();
    const card = useSelector(getCard(cardId))

    useEffect(() => {
        dispatch(fetchCard(cardId))
    }, [cardId, dispatch])

    return(
        <div>
            <img src={card?.photo}></img>
            <h1>{card?.name}</h1>
            <ul>
                <li>{card?.game}</li>
                <li>{card?.set}</li>
                <li>{card?.price}</li>
            </ul>
            <Link to='/cards'>Return to Cards Page</Link>
        </div>
    )

}

export default CardShow
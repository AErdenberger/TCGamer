import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCard, fetchCard } from "../../store/card";
import { createCartItem, getCartItems, updateCartItem } from "../../store/cart";
import "./index.css"
import { fetchCardComments, getComments } from "../../store/comment";
import CommentBox from "../Comments/CommentBox";

function CardShow(){
    const cartItems = useSelector(getCartItems);
    const sessionUser = useSelector(state => state.session.user);
    const { cardId } = useParams();
    const dispatch = useDispatch();
    const card = useSelector(getCard(cardId))
    const cardComments = useSelector(state => state.comments)
    const commentsArr = Object.values(cardComments);
    // const cardComments = useSelector(getComments());

    console.log(commentsArr);

    useEffect(() => {
        dispatch(fetchCard(cardId))
    }, [cardId, dispatch])

    useEffect(() => {
        dispatch(fetchCardComments(cardId))
    }, [dispatch, cardId])

    const commentBox = () => {
        return (
            <div className="CommentsContainer">
                <ul className="AlltheComments">
                    {cardComments?.map(comment => {
                        return <CommentBox key={comment?.id} user={comment?.commenterId} card={cardId}/>
                    })}
                </ul>
            </div>
        )
    }

    const handleClick = () => {
        if (sessionUser) {
            let newCartItem = {};
            const curCartItem =  cartItems.find(cartItem => (cartItem.cardId === card.id))
            if (curCartItem) {
                newCartItem.id = curCartItem.id;
                newCartItem.buyerId = sessionUser.id;
                newCartItem.cardId = cardId;
                newCartItem.quantity = ++curCartItem.quantity;
                dispatch(updateCartItem(newCartItem))
            } else {
                newCartItem.buyerId = sessionUser.id;
                newCartItem.cardId = cardId;
                newCartItem.quantity = 1;
                dispatch(createCartItem(newCartItem))
            }
        } else {
            alert("Not Signed In", "You must be signed in to add this to your cart.")
        }
    }

    return(
        <div className="TheWholeCardShow">
            <img className="CardShowImage" src={card?.photo}></img>
            <div>
                <h1 className="CardShowName">{card?.name}</h1>
                <div className="AddCardtoCart">
                    <ul className="CardShowData">
                        <li>Game: {card?.game}</li>
                        <li>Set: {card?.set}</li>
                        <li>Price: ${card?.price}</li>
                    </ul>
                    <button className="AddtoCartButton" onClick={handleClick}>Add to Cart</button>
                </div>
            </div>
            <Link className="LinkBack" to='/cards'>Return to Cards Page</Link>
            <div className="CommentsContainer">
                <div className="AllTheComments">
                    <ul className="CommentsList">
                        {commentsArr.map(comment => {
                            return <CommentBox key={comment.id} comment={comment} user={comment?.commenterId} card={cardId}/>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default CardShow
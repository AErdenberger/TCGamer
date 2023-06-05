import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCard, fetchCard } from "../../store/card";
import { createCartItem, getCartItems, updateCartItem } from "../../store/cart";
import "./index.css"
import { createComment, fetchCardComments, getComments } from "../../store/comment";
import CommentBox from "../Comments/CommentBox";
import { fetchUsers } from "../../store/user";

function CardShow(){
    const cartItems = useSelector(getCartItems);
    const sessionUser = useSelector(state => state.session.user);
    const { cardId } = useParams();
    const dispatch = useDispatch();
    const card = useSelector(getCard(cardId))
    const cardComments = useSelector(state => state.comments)
    const commentsArr = Object.values(cardComments);
    const users = useSelector(state => state.users);
    const [body, setBody] = useState();
    // const cardComments = useSelector(getComments());
    
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])
    
    useEffect(() => {
        dispatch(fetchCard(cardId))
    }, [cardId, dispatch])

    useEffect(() => {
        dispatch(fetchCardComments(cardId))
    }, [dispatch, cardId])

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (sessionUser) {
            let newComment = {}
            newComment.commenterId = sessionUser.id;
            newComment.cardId = cardId;
            newComment.body = body;
            setBody("");
            dispatch(createComment(newComment))
        } else {
            alert("Not Signed in", "You must be signed in in order to comment")
        }
    }

    let cardPrice = parseFloat(card?.price).toFixed(2);

    const update = (field) => {
        return e => {
          switch (field) {
            case 'body':
                setBody(e.currentTarget.value);
                break;
            default:
                console.error('Field name error');
                break;
            }
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
                        <li>Price: ${cardPrice}</li>
                    </ul>
                    <button className="AddtoCartButton" onClick={handleClick}>Add to Cart</button>
                </div>
            </div>
            <Link className="LinkBack" to='/cards'>Return to Cards Page</Link>
            <div className="CommentsContainer">
                <div className="AllTheComments">
                    <ul className="CommentsList">
                        {commentsArr.map(comment => {
                            return <CommentBox key={comment.id} comment={comment} user={users[comment?.commenterId]} card={cardId}/>
                        })}
                    </ul>
                </div>
                <div className="CommentSubmit">
                    <form onSubmit={handleSubmit} >
                            <textarea value={body} onChange={update('body')}/>
                        <input id="submit-button" type="submit" value={"Submit Comment"}/>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default CardShow
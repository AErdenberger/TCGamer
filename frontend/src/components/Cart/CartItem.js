import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteCartItem, removeCartItem, updateCartItem } from "../../store/cart";
import "./index.css";

function CartItem({ cartItem, card }) {
    const dispatch = useDispatch();
    const [count, setCount] = useState(cartItem?.quantity)

    useEffect(() => {
        setCount(cartItem.quantity);
    }, [count]);

    const handlePlus = (e) => {
        e.preventDefault();
        let newCartItem = {};
        newCartItem.id = cartItem.id;
        newCartItem.buyerId = cartItem.buyerId;
        newCartItem.cardId = card.id;
        newCartItem.quantity = ++cartItem.quantity;
        return dispatch(updateCartItem(newCartItem))
    }

    const handleMinus = (e) => {
        e.preventDefault();
        let newCartItem = {};
        if (cartItem?.quantity === 1) {
            return dispatch(deleteCartItem(cartItem?.id))
        } else {
            newCartItem.id = cartItem.id;
            newCartItem.buyerId = cartItem.buyerId;
            newCartItem.cardId = card.id;
            newCartItem.quantity = --cartItem.quantity;
            return dispatch(updateCartItem(newCartItem))
        }
    }

    return (
        <div className="TheWholeCart">
            <li>
                <div className="CartItem">
                    <div className="CartInfo">
                        <div className="cartItemName">{card?.name}: {cartItem?.quantity}</div>
                        <div className="cartItemPrice">Total Price: {(cartItem?.quantity * card?.price).toFixed(2)}</div>
                        <div className="cartItemPhoto">
                            <img src={card?.photo}></img>
                        </div>
                    </div>
                    <div className="cartButtons">
                        <button className="Clicky" id="plus" onClick={(e) => handlePlus(e)}>+</button>
                        <button className="Clicky" id="minus" onClick={(e) => handleMinus(e)}>-</button>
                        <button className="Clicky" onClick={() => dispatch(deleteCartItem(cartItem?.id))}>Clear Item</button>
                    </div>
                </div>
            </li>
        </div>
    )
    
}

export default CartItem;
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../../store/cart";

function CartItem({ cartItem, card }) {
    const dispatch = useDispatch();
    const [count, setCount] = useState(cartItem?.quantity)

    useEffect(() => {
        setCount(cartItem.quantity);
    }, [count]);

    return (
        <div>
            <li>
                <div className="cartItemName">{card.name}: {cartItem.quantity}</div>
                <div></div>
                <div className="cartItemPhoto">
                    <img src={card.photo}></img>
                </div>
                <div className="cartItems">
                    <button onClick={() => setCount(count + 1)}>+</button>
                    <button onClick={() => setCount(count - 1)}>-</button>
                    <button onClick={() => dispatch(removeCartItem(cartItem?.id))}>Clear Item</button>
                </div>
            </li>
        </div>
    )
    
}

export default CartItem;
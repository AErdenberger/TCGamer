import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems, getCartItems } from "../../store/cart";
import CartItem from "./CartItem";
import "./index.css"
import { useEffect } from "react";



function Cart() {

    const dispatch = useDispatch();
    const cartItems = useSelector(getCartItems)
    const cardsInCart = useSelector(state => state.cards)

    useEffect(() => {
        dispatch(fetchCartItems)
    }, [dispatch, cartItems])

    if (!cartItems || !cartItems.length) {
        return (
            <div className="EmptyCart">
                <img className="EmptyCartImage" src="/EmptyCart.png"></img>
                <h1>Your Cart is Empty.</h1>
            </div>
        )
    }

    return (
        <div>
            <ul>
                {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} card={cardsInCart[cartItem.cardId]}/>)}
            </ul>
        </div>
    )
}

export default Cart;
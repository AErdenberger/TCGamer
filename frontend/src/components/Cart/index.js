import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, fetchCartItems, getCartItems, removeCartItem } from "../../store/cart";
import CartItem from "./CartItem";
import "./index.css"
import { useEffect, useState } from "react";



function Cart() {

    const dispatch = useDispatch();
    const cartItems = useSelector(getCartItems)
    const cardsInCart = useSelector(state => state.cards)
    const [checkedOut, setCheckedOut] = useState(false);

    useEffect(() => {
        dispatch(fetchCartItems)
    }, [dispatch, cartItems])

    if (!cartItems || !cartItems.length) {
        if(checkedOut){
            return(
                <div>
                    <h1>You have successfully Checkedout! Enjoy your cards!</h1>
                </div>
            )
        } else {
            return (
                <div className="EmptyCart">
                    <img className="EmptyCartImage" src="/EmptyCart.png"></img>
                    <h1>Your Cart is Empty.</h1>
                </div>
            )
        }
        
    }

    let totalPrice = 0;
    cartItems.forEach((item) => {
        if (item) {
            let card = cardsInCart[item.cardId];
            totalPrice += (card.price * item.quantity);
        }
    });

    let cartTotal = 0;
    cartItems.forEach(item => {
        if (item) {
            cartTotal += item.quantity;
        }
    })

    const handleCheckout = (e) => {
        e.preventDefault();
        cartItems.forEach(item => {
            dispatch(deleteCartItem(item.id))
        })
        setCheckedOut(true);
    }

    return (
        <div className="cartIndex">
            <div className="cartInfo">
                <h1>Your Cart Contains {cartTotal} Items</h1>
                <h1>Total Price: {totalPrice.toFixed(2)}</h1>
            </div>
            <ul>
                {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} card={cardsInCart[cartItem.cardId]}/>)}
            </ul>
            <button className="Clicky" id="checkOut" onClick={(e) => handleCheckout(e)}>Checkout</button>
        </div>
    )
}

export default Cart;
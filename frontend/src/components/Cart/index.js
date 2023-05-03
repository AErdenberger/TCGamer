import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../store/cart";
import CartItem from "./CartItem";


function Cart() {

    const dispatch = useDispatch();
    const cartItems = useSelector(getCartItems)
    const cardsInCart = useSelector(state => state.cards)

    if (!cartItems || !cartItems.length) {
        return (
            <div>
                The Cart is Empty.
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
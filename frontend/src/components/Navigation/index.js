import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProfileButton from './ProfileButton';
import SearchBar from "./SearchBar";
import './Navigation.css';
import { fetchCartItems, getCartItems } from "../../store/cart";

function Navigation() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const { pathname } = useLocation();
    const cartItems = useSelector(getCartItems)

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                {pathname.includes("login") ? null : <NavLink to="/login" className="auth">Log In</NavLink>}
                {pathname.includes("Signup") ? null : <NavLink to="/Signup" className="auth">Sign Up</NavLink>}  
            </>
        );
    }

    let cartTotal = 0;
    cartItems.forEach(item => {
        if (item) {
            cartTotal += item.quantity;
        }
    })

    let cartButton;
    if (sessionUser) {
        cartButton = (
            <div>
                <NavLink exact to="/cart">
                        <i className="fa-solid fa-cart-shopping fa-2xl"></i>
                </NavLink>
                <div className="cartTotal">{cartTotal}</div>
            </div>
        )
    }

    useEffect(() => {
        dispatch(fetchCartItems())
    }, [])

    return (
        <div className="headerBar">
            <ul id="NavBar">
                <li>
                    <NavLink exact to="/">
                        <img src="/TCGGamerLogo.png" alt="" className="siteLogo" width="150" height="150" />
                    </NavLink>
                </li>
                <li>
                    <SearchBar />
                </li>
                <li>
                    {cartButton}
                </li>
                <li id="sessionLinks">
                    {sessionLinks}
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
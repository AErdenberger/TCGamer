import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProfileButton from './ProfileButton';
import SearchBar from "./SearchBar";
import './Navigation.css';
import { fetchCartItems } from "../../store/cart";

function Navigation() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const { pathname } = useLocation();

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

    let cartButton;
    if (sessionUser) {
        cartButton = (
            <NavLink exact to="/cart">
                    <i className="fa-solid fa-cart-shopping"></i>
            </NavLink>
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
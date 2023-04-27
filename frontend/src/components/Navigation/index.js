import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from './ProfileButton';
import SearchBar from "./SearchBar";
import './Navigation.css';

function Navigation() {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <NavLink to="/login" className="auth">Log In</NavLink>
                <NavLink to="/Signup" className="auth">Sign Up</NavLink>
            </>
        );
    }

    return (
        <div >
            <ul id="NavBar">
                <li>
                    <NavLink exact to="/">
                        <img src="/TCGGamerLogo.png" alt="" className="siteLogo" width="100" height="100" />
                    </NavLink>
                </li>
                <li>
                    <SearchBar />
                </li>
                <li id="sessionLinks">
                    {sessionLinks}
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
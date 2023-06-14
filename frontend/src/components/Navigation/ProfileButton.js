import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Navigation.css";
import * as sessionActions from '../../store/session.js';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true)
    }

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout())
    };

    return (
        <div className="The-Whole-Top-Corner">
            <button className="profile-button" onClick={openMenu}>
                <i className="fa-solid fa-user"/>
            </button>
            {showMenu && (
                <div className="profile-area">
                    <ul className="profile-dropdown">
                        <li>{user.username}</li>
                        <li>{user.email}</li>
                        <li>
                            <button className="logOut" onClick={logout}>Log Out</button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default ProfileButton;
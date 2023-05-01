 /**
     * Goal: Create a checkbox, that when selected, only shows Pokemon cards
     * 
     * UI component to check and uncheck this box
     * 
     * setter action for the select  box values
     * 
     * reducer for the select box values
     * 
     * selector for the checkbox values
     * 
     * map game checkbox state into props, so that we have the values and component re-renders on change 
     * 
     * in filterCards method, if one of the game checkboxes is true, filter down to just those cards as well 
     */

import { Link } from "react-router-dom/cjs/react-router-dom"
import "./index.css"

function NavFilterBar() {


    return (
        <div className="FilterBar">
            <Link to="/cards">All Cards</Link>
            <Link to="/cards/category/MTG">Magic: the Gathering</Link>
            <Link to="/cards/category/Pokemon">Pokemon</Link>
            <Link to="/cards/category/YuGiOh">YuGiOh</Link>
        </div>
    )
}

export default NavFilterBar;
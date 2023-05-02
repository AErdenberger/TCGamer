import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCards, fetchCards } from "../../store/card";
import { getSearchBarText, setSearchBarText } from "../../store/searchBar";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        dispatch(setSearchBarText(e.target.value));
    };

    return (
        <div>
            <input id="SearchBar"
                type="search"
                placeholder="Search for Cards"
                onChange={handleChange}
                value={searchInput} 
                />
        </div>
    )
};

export default SearchBar
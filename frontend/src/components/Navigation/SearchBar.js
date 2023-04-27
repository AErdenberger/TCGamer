import React, {useState} from "react";
import { useSelector } from "react-redux";
import { getCards, fetchCards } from "../../store/card";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    const cards = useSelector(getCards);

    if (searchInput.length > 0) {

    }

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
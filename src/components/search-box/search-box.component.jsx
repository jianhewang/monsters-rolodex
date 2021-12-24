import React from "react";
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
        className="search"
        type='search' 
        placeholder={placeholder}
        // call the render function at change
        onChange={handleChange} 
        />
)
import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
    <input
      type="text"
      placeholder="Search tasks..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button>Search</button>
    </div>
  );
};

export default SearchBar;
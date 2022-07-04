import React from "react";

const Search = ({ search, SetInput }) => {
  const inputHandler = (e) => {
    SetInput(e.target.value);
  };
  return (
    <div className="search">
      <input onChange={inputHandler} type="text" />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;

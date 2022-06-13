import React from "react";

const Search = ({ setCityName }) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setCityName(event.target.cityName.value);
        event.target.cityName.value = "";
      }}
      className="search"
    >
      <input type="text" name="cityName" />
      <button>Search</button>
    </form>
  );
};

export default Search;

import React from "react";
import "./TodoSearch.css";
const TodoSearch = ({ searchValue, setSearchValue }) => {
  const onSenchenValue = (event) => {
    console.log(event);
    setSearchValue(event.target.value);
  };
  return (
    <>
      <input
        className="TodoSearch"
        placeholder="Cebolla"
        value={searchValue}
        onChange={onSenchenValue}
      />
    </>
  );
};
export { TodoSearch };

import React from "react";
import "./TodoSearch.css";
import { TodosContext } from "../TodosContext";
const TodoSearch = () => {
  const { searchValue, setSearchValue } = React.useContext(TodosContext);
  const onSenchenValue = (event) => {
    console.log(event);
    setSearchValue(event.target.value);
  };
  return (
    <>
      <input
        className="TodoSearch"
        placeholder="Buscar tarea"
        value={searchValue}
        onChange={onSenchenValue}
      />
    </>
  );
};
export { TodoSearch };

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
     <div className="input">
     <input
        className="TodoSearch  "
        placeholder="Buscar tarea"
        value={searchValue}
        onChange={onSenchenValue}
      />
      <i class="bi bi-search"></i>
     </div>
    </>
  );
};
export { TodoSearch };

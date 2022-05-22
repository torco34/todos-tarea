import React from "react";
import "./TodoCounter.css";
import { TodosContext } from "../TodosContext";
const TodoCouter = () => {
  const { completedTodos, totalTodos } = React.useContext(TodosContext);

  return (
    <>
      <h1 className="TodoCounter">
        Has completado {completedTodos} de {totalTodos} todos
      </h1>
    </>
  );
};
export { TodoCouter };

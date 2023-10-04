import React from "react";
import "./TodoCounter.css";
import { TodosContext } from "../TodosContext";
import Button from "react-bootstrap/Button";

const TodoCouter = () => {
  const { completedTodos, totalTodos } = React.useContext(TodosContext);

  return (
    <>
      <div className="TodoCounter">
        <div>
          {" "}
          Tareas: <span> {totalTodos}</span>
        </div>{" "}
        <br></br>
        <div>
          {" "}
          Completado: <span>{completedTodos}</span>
        </div>
      </div>
    </>
  );
};
export { TodoCouter };

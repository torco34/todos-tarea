import React from "react";
import "./TodoCounter.css";
const TodoCouter = ({ completed, total }) => {
  return (
    <>
      <h1 className="TodoCounter">
        Has completado {completed} de {total} todos
      </h1>
    </>
  );
};
export { TodoCouter };

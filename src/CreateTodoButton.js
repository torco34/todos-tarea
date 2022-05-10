import React from "react";
import "./CreateTodoButton.css";
const CreateTodoButton = () => {
  const onClickBoton = () => {
    alert("Aqui va un portal");
  };
  return (
    <>
      <button className="CreateTodoButton" onClick={onClickBoton}>
        +
      </button>
    </>
  );
};
export { CreateTodoButton };

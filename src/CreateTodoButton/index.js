import React from "react";
import "./CreateTodoButton.css";
const CreateTodoButton = (props) => {
  const onClickBoton = () => {
    props.setOpenModal((prevState) => !prevState);
  };
  return (
    <>
      <button className="CreateTodoButton" onClick={onClickBoton}>
        <p>Agregar</p>
      </button>
    </>
  );
};
export { CreateTodoButton };

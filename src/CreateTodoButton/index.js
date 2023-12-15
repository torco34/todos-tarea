import React from "react";
import "./CreateTodoButton.css";
const CreateTodoButton = (props) => {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const onClickBoton = () => {
    props.setOpenModal((prevState) => !prevState);
    console.log("hola mundo");
  };


  return (
    <>
    
      <button className="CreateTodoButton  btn btn" onClick={onClickBoton}>
        Crear Tareas
      </button>
    </>
  );
};
export { CreateTodoButton };

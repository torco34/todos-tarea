import React from "react";
import "./TodoItem.css";
import icon from "../assets/img/icon.png";
const TodoItem = (props) => {
  const onComplete = () => {
    alert("Ha completado");
  };

  return (
    <>
      <li className="TodoItem">
        <span
          className={`Icon Icon-check ${
            props.completed && "Icon-check--active"
          }`}
          onClick={props.onComplete}
        >
          √
        </span>
        <div
          className={`TodoItem-p  ${props.completed && "TodoItem-p--complete"}`}
        >
           {props.text}
        </div>
        <span className=" btn btn-dark Icon-delete" onClick={props.onDelete}>
        
          Eliminar
        </span>
      </li>
    </>
  );
};
export { TodoItem };

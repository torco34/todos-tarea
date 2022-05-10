import React from "react";
import "./TodoItem.css";
const TodoItem = (props) => {
  const onComplite = () => {
    alert("Ha completado");
  };

  const onDeleted = () => {
    alert("Has eliminado");
  };
  return (
    <>
      <li className="TodoItem">
        <span
          className={`Icon Icon-check ${
            props.completed && "Icon-check--active"
          }`}
          onClick={onComplite}
        >
          √
        </span>
        <p
          className={`TodoItem-p  ${props.completed && "TodoItem-p--complete"}`}
        >
          {props.text}
        </p>
        <span className="Icon Icon-delete" onClick={onDeleted}>
          X
        </span>
      </li>
    </>
  );
};
export { TodoItem };

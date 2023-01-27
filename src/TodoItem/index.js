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
        <p
          className={`TodoItem-p  ${props.completed && "TodoItem-p--complete"}`}
        >
          {props.text}
        </p>
        <span className=" Icon-delete" onClick={props.onDelete}>
          <img src={icon} alf="img" />
        </span>
      </li>
    </>
  );
};
export { TodoItem };

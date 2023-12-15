import React from "react";
import "./TodoItem.css";
import icon from "../assets/img/icon.png";
const TodoItem = (props) => {
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

        <div className="button">
          <span
            className=" btn btn-danger Icon-delete"
            onClick={props.onDelete}
          >
            <i class="bi bi-trash"></i>
          </span>
        </div>
      </li>
    </>
  );
};
export { TodoItem };

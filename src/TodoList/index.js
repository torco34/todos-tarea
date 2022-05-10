import React from "react";
import "./TodoList.css";
const TodoList = (props) => {
  return (
    <>
      <ul>{props.children}</ul>
    </>
  );
};
export { TodoList };

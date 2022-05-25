import React from "react";
import { TodosContext } from "../TodosContext";
import "./TodoForm.css";
function TodoForm() {
  const [newTodoValue, SetNewtodoValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodosContext);
  const onChange = (event) => {
    SetNewtodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>Aqui tu tarea</label>

        <textarea
          value={newTodoValue}
          onChange={onChange}
          placeholder="Cortar ceboola"
        />
        <div className="TodoForm-buttonContainer">
          <button
            type="button"
            className="TodoForm-button TodoForm-button--cancel"
            onClick={onCancel}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="TodoForm-button TodoForm-button--add"
          >
            Anadir
          </button>
        </div>
      </form>
    </>
  );
}
export { TodoForm };

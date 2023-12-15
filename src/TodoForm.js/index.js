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
        <label>Crear tu tarea aquí</label>

        <textarea
          value={newTodoValue}
          onChange={onChange}
          placeholder="Agregar Tareas"
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
            Añadir
          </button>
        </div>
      </form>
    </>
  );
}
export { TodoForm };
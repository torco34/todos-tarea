import React from "react";
import { TodosContext } from "../TodosContext";
import { TodoCouter } from "../TodoCouter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm.js";
import { CreateTodoButton } from "../CreateTodoButton";
function AppUI() {
  const {
    error,
    loading,
    searchedTodo,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodosContext);
  return (
    <>
      <header className="App-header App">
        <TodoCouter />

        <TodoSearch />

        <TodoList>
          {error && <p>Lo sentimos :( error</p>}
          {loading && <p>Cargando......</p>}
          {!loading && !searchedTodo.length && <p> ! Crea tu Primer todos!</p>}
          {searchedTodo.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        {openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
        <CreateTodoButton setOpenModal={setOpenModal} />
      </header>
    </>
  );
}
export { AppUI };

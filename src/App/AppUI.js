import React from "react";
import { TodosContext } from "../TodosContext";
import { TodoCouter } from "../TodoCouter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
function AppUI() {
  const { error, loading, searchedTodo, completeTodo, deleteTodo } =
    React.useContext(TodosContext);
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

        <CreateTodoButton />
      </header>
    </>
  );
}
export { AppUI };

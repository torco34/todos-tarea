import React from "react";

import { TodoCouter } from "../TodoCouter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
function AppUI({
  error,
  loading,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodo,
  completeTodo,
  deleteTodo,
}) {
  return (
    <>
      <header className="App-header App">
        <TodoCouter total={totalTodos} completed={completedTodos} />

        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

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

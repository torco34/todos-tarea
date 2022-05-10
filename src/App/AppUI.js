import React from "react";

import { TodoCouter } from "../TodoCouter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
function AppUI({
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

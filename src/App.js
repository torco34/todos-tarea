import React from "react";
import { TodoCouter } from "./TodoCouter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import "./App.css";

const todos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Hacer aseo mi casa", completed: false },
  { text: "Comer mucha proteina", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "Trabajar en la pizzeria", completed: false },
  { text: "Hacer ejercicio", completed: false },
];
function App() {
  return (
    <>
      <header className="App-header App">
        <TodoCouter />

        <TodoSearch />

        <TodoList>
          {todos.map((todo) => (
            <TodoItem key={todo.text} text={todo.text} />
          ))}
        </TodoList>
        <CreateTodoButton />
      </header>
    </>
  );
}

export default App;

import React from "react";
import { TodoCouter } from "./TodoCouter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import "./App.css";

const defaulTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Hacer aseo mi casa", completed: false },
  { text: "Comer mucha proteina", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "Trabajar en la pizzeria", completed: true },
  { text: "Hacer ejercicio", completed: false },
];
function App() {
  const [todos, setTodos] = React.useState(defaulTodos);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  // PARA BUCAR LA TAREA
  let searchedTodo = [];
  if (!searchValue.length >= 1) {
    searchedTodo = todos;
  } else {
    searchedTodo = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLwerCase();
      return todoText.includes(searchText);
    });
  }
  // PARA MARCAR COMO LEIDO O HECHO
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text == text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;

    setTodos(newTodos);
  };

  // PARA ELIMINAR LA TAREA HECHA
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text == text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };
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

export default App;

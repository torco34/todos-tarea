import React from "react";
import "./App.css";
import { AppUI } from "./AppUI";
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
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodo={searchedTodo}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;

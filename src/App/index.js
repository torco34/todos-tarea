import React from "react";
import "./App.css";
import { AppUI } from "./AppUI";

function App() {
  // GUARDADO EN LOCALSTORY
  const localStorageTodo = localStorage.getItem("TODOS_V1");
  let persedTodos;

  if (!localStorageTodo) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    persedTodos = [];
  } else {
    persedTodos = JSON.parse(localStorageTodo);
  }
  // REACIONA A TRUE LA LINEA MARCADO LEIDO
  const [todos, setTodos] = React.useState(persedTodos);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  // PARA BUCAR LA TAREA FILTRAR
  let searchedTodo = [];
  if (!searchValue.length >= 1) {
    searchedTodo = todos;
  } else {
    searchedTodo = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  // FUNCION PARA ELIMINAR DEFINITIVAMENTE CON LOCAL STARY
  const seveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem("TODOS_V1", stringifiedTodos);
    setTodos(newTodos);
  };

  // PARA MARCAR COMO LEIDO O HECHO
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text == text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;

    seveTodos(newTodos);
  };

  // PARA ELIMINAR LA TAREA HECHA
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text == text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    seveTodos(newTodos);
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

import React from "react";
import "./App.css";
import { AppUI } from "./AppUI";

function useLocalStorage(itemName, initialValue) {
  const [error, seterror] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        seterror(error);
      }
    }, 1000);
  });

  // funcion que une localStore

  const seveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      seterror(error);
    }
  };

  return { item, seveItem, loading, error };
}

function App() {
  const {
    item: todos,
    seveItem: seveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  // GUARDADO EN LOCALSTORY

  // REACIONA A TRUE LA LINEA MARCADO LEIDO

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
      loading={loading}
      error={error}
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

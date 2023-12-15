import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodosContext = React.createContext();
function TodoProvider(props) {
  const {
    item: todos,
    seveItem: seveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  // GUARDADO EN LOCALSTORY

  // REACIONA A TRUE LA LINEA MARCADO LEIDO

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const [texto, setTexto] = React.useState();
  const [newTodoValue, setNewTodoValue] = React.useState([]);

  const [todo, setTodo] = React.useState([]);
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
  const addTodo = (text) => {
    const newTodos = [...todos];
    setTodo([...todos, { text }]);
    newTodos.push({ completed: false, text });
    seveTodos(newTodos);
    console.log(newTodos, "newTosdo");
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
    <TodosContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodo,
        completeTodo,
        deleteTodo,
        addTodo,
        openModal,
        setOpenModal,
       
        setNewTodoValue,
        newTodoValue,
      }}
    >
      {props.children}
    </TodosContext.Provider>
  );
}

export { TodosContext, TodoProvider };

import React from "react";
import { TodosContext } from "../TodosContext";
import { TodoCouter } from "../TodoCouter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm.js";
import { CreateTodoButton } from "../CreateTodoButton";
import { Header } from "../Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AppUI() {
  const {
    error,
    loading,
    searchedTodo,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    onEditTodo,
  } = React.useContext(TodosContext);
  return (
    <>
      <Header />
      <br></br>
      <Container className="">
        <Row>
          <Col lg={9}>
            <TodoSearch />
          </Col>
          <Col lg={0}>
            <CreateTodoButton setOpenModal={setOpenModal} />
          </Col>
        </Row>

        <Row>
          <Col lg={9}>
            <TodoList>
              {error && <p>Lo sentimos :( error</p>}
              {loading && <p>Cargando......</p>}
              {!loading && !searchedTodo.length && (
                <p className="text-center p-3"> !No tienes tareas Creadas!</p>
              )}
              {searchedTodo.map((todo) => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                  onEdit={() => onEditTodo(todo.text)}
                />
              ))}
            </TodoList>
          </Col>
          <Col lg={3}>
            <TodoCouter />
          </Col>
        </Row>
        {openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
        {/* <CreateTodoButton setOpenModal={setOpenModal} /> */}
      </Container>
    </>
  );
}
export { AppUI };

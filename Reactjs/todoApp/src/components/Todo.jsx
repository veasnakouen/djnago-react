import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

//for sharing useState in react we need to pass state in the parent component

const Todo = () => {
  // this is the simple solution for using todos in both,Form and TodoList
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const TotalTodos = todos.length;
  return (
    <>
      {/* Form component need todo for read and write */}
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} TotalTodos={TotalTodos} />
    </>
  );
};

export default Todo;

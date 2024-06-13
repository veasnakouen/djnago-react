import { useState } from "react";
import style from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const result = fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => response.json()
  );

  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    //for clear with string
    // setTodo("")
    //fro clear with the object
    setTodo({ name: "", done: false });
  }
  return (
    <>
      <div>
        <form action="" onSubmit={handleSubmit} className={style.todoform}>
          <div className={style.inputContainer}>
            <input
              className={style.modernInput}
              onChange={(e) => setTodo({ name: e.target.value, done: false })}
              type="text"
              value={todo.name}
              placeholder="Enter your task!."
            />
            <button type="submit" className={style.modernButton}>
              Add
            </button>
            {/* <div>
              {result.map((item) => (
                <h2 key={item.id}>{item.name}</h2>
              ))}
            </div> */}
          </div>
        </form>
      </div>
    </>
  );
}

import style from "./todoitem.module.css";

const TodoItem = ({ item, todos, setTodos }) => {
  function handleDelete(item) {
    // console.log("delete button clicked", item);
    // this solution is just make filter for items except item we delete
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    // console.log("item clicked!",name);
    const newArray = todos.map((todo) =>
      // ...todo : spread operator
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    //set newArray to todos
    setTodos(newArray);
  }
  const classDone = item.done ? style.completed : "";
  return (
    <li className={style.item}>
      <h3
        className={style.itemname}
        style={{ fontWeight: "bolder", color: "red", fontStyle: "italic" }}
      >
        {/* we ue function ()=>{....} to prevent auto when app run  */}
        <span
          className={classDone}
          onClick={() => {
            handleClick(item.name);
          }}
        >
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={style.deletebutton}
          >
            X
          </button>
        </span>
        <hr className={style.line} />
      </h3>
    </li>
  );
};

export default TodoItem;

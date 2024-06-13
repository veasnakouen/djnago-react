import TodoItem from "./TodoItem";
import style from "./todolist.module.css";

export default function TodoList({ todos, setTodos }) {
  // make sort by complete or not (done)
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={style.list}>
      <ul style={{ listStyleType: "dot" }}>
        {sortedTodos.map((item, index) => (
          <TodoItem key={index} item={item} todos={todos} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  );
}

import style from "./footer.module.css";

export default function Footer({ completedTodos, TotalTodos }) {
  return (
    <div className={style.footer}>
      <span className={style.item}>Completed Todos : {completedTodos}</span>
      <span className={style.item}>Total Todos : {TotalTodos}</span>
    </div>
  );
}

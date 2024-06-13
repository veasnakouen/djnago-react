import style from './notfound.module.css'


function Notfound()
{
  return (
    <div className={style.notfound}>
      <h1>404 Not Found</h1>
      <p> the page you're looking for doesn't exist!</p>
    </div>
  );
}

export default Notfound;

import style from "./foodItem.module.css";
export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={style.itemContainer}>
      <img className={style.itemImage} src={food.image} alt="" />
      <div className={style.itemContent}>
        <p className={style.itemName}>{food.title}</p>
      </div>
      <div className={style.buttonContainer}>
        <button
          className={style.itemButton}
          onClick={() => {
            setFoodId(food.id);
            console.log(food.id);
          }}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}

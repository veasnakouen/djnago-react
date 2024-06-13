import { useEffect, useState } from "react";
import style from "./fooddetails.module.css";
import ItemList from "./ItemList";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "79a7b0bd4e414985b6a0241abda32ddb";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <>
      <div>
        <div className={style.recipeCard}>
          <h1 className={style.recipeName}>{food.title}</h1>
          <img src={food.image} alt="" className={style.recipeImage} />
          <div className={style.recipeDetails}>
            <span>
              <strong>🕛{food.readyInMinutes} Minutes </strong>
            </span>
            <span>
              👨‍👩‍👧‍👦 <strong> Serve {food.servings}</strong>
            </span>
            <span>
              <strong>
                {food.vegetarian ? "🥕Vegetarian" : "🥩Non-Vegetarian"}
              </strong>
            </span>
            <span>
              <strong>{food.vegan ? "🫎 Vegan" : ""}</strong>
            </span>
            <div>
              💲
              <span>
                <strong>{food.pricePerServing / 100} Per Serving</strong>
              </span>
            </div>
          </div>
          <h2>Ingredients</h2>
          <ItemList isLoading={isLoading} food={food} />
          <h2>Instruction:</h2>
          <div className={style.recipeInstructions}>
            <ol>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                food.analyzedInstructions[0].steps.map((step) => (
                  <li key={step.number}>{step.step}</li>
                ))
              )}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

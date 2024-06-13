import { useEffect } from "react";
import { useState } from "react";
import style from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "79a7b0bd4e414985b6a0241abda32ddb";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("Pizza"); //hooks

  //Syntax of the useEffect Hooks
  //useEffect(()=>{},[])
  //   useEffect(() => {
  //     function Demo() {
  //       console.log("object");
  //     }
  //     Demo();
  //   }, [query]);
  useEffect(() => {
    // fetching data from api using fetch
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={style.searchContainer}>
      <input
        className={style.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

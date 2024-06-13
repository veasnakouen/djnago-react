import { Fruit } from "./Fruit";

export const Fruits = () => {
  //   const fruits = ["apple", "mango", "bananna", "pinaple"];
  const fruits = [
    { name: "Apple", price: 9, emoji: "🍎", soldOut: true },
    { name: "mango", price: 4, emoji: "🥭", soldOut: false },
    { name: "Bananna", price: 20, emoji: "🍌", soldOut: false },
    { name: "Grap", price: 10, emoji: "🍇", soldOut: true },
    { name: "Orange", price: 15, emoji: "🍊", soldOut: true },
  ];
  return (
    <>
      <div>
        <h2>Lists of Fruits : </h2>
        <ul style={{ listStyleType: "dot" }}>
          {fruits.map((item, index) => (
            // <li key={index}>
            //   {item.emoji}
            //   {item.name.toUpperCase()}, price: <b>$</b>
            //   {item.price}
            //   <Fruit />
            // </li>
            <Fruit
              key={index}
              name={item.name}
              price={item.price}
              emoji={item.emoji}
              soldOut={item.soldOut}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

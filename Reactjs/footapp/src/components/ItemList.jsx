import Item from "./item";

export default function ItemList({ food, isLoading }) {
  return (
    <>
      {isLoading ? (
        <p>Loading ... </p>
      ) : (
        food.extendedIngredients.map((item) => (
          <>
            <Item item={item} key={item.id} />
          </>
        ))
      )}
    </>
  );
}

export const Fruit = ({ name, price, emoji, soldOut }) => {
  return (
    <>
      {/* {emoji} {name} {" $"}
      {price} */}
      {/* {price >= 10 ? (
        <li>
          {emoji} {name} {" $"}
          {price}
        </li>
      ) : (
        ""
      )} */}
      <li>
        {emoji}
        {name}
        {price}
        <i
          style={{
            color: "red",
            fontStyle: "italic",
            textDecoration: "underline",
          }}
        >
          {" "}
          {soldOut ? "sold out" : "in stock"}
        </i>
      </li>
    </>
  );
};

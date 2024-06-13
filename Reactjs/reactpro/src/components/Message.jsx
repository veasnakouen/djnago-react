

export const Message = () => {
  // handle event
  function HandleClick(e) {
    e.preventDefault();
    console.log("Button clicked!");
  }
  return (
    <>
      <button onClick={HandleClick}> Click here to get message</button>
    </>
  );
};

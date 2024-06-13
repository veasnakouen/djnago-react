function Hello({ person }) {
  //   const { name, message } = props;
  // console.log(props);
  // function Hello({ message, name, emoji, seatNumber }) {
  // props.name = "New name" // we can not assign value like this

  return (
    <>
      <h1>
        {person.message}
        {person.emoji} {person.name}
        {person.seatNumber}
      </h1>
    </>
  );
}
export default Hello;

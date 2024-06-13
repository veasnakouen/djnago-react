import { useState } from "react";

const Form = () => {
  //   const [name, setName] = useState("");
  // ...name : called spread operator
  const [name, setName] = useState({ firstName: "", lastName: "" });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }

  return (
    <>
      {name.firstName}-{name.lastName}
      <form action="">
        <input
          //   onChange={(e) => setName(e.target.value)}
          //   onChange={(e) => setName({ firstName: e.target.value,lastName:"" })}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text "
          value={name.firstName}
          placeholder="Enter your first name here!"
        />
        <input
          type="text"
          value={name.lastName}
          //   onChange={(e) => setName({ firstName:'',lastName: e.target.value })}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          placeholder="Enter your last name here"
        />
        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </form>
    </>
  );
};

export default Form;

import { useState, useEffect } from "react";
export default function TodoInput(props) {
  const [todo, setTodo] = useState("");

  useEffect(() => {
    console.log("update");
  }, [todo]);

  return (
    <input
      type="text"
      placeholder=""
      onChange={(event) => {
        const value = event.target.value;
        setTodo(value);
      }}
      value={todo}
    ></input>
  );
}

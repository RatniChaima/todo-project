import { useState } from "react";

export default function Add(props) {
  const [value, setValue] = useState("");

  const addNewTodo = () => {
    props.onAdd({
      id: new Date().getTime(),
      name: value,
      date: new Date(),
      isDone: false
    });
    setValue("");
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={addNewTodo}>Add</button>
    </div>
  );
}

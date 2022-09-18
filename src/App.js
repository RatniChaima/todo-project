import { useState } from "react";
import Add from "./components/Add";
import Todo from "./components/Todo";
import "./styles.css";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <Add
        onAdd={(value) => {
          const newTodoList = [...todoList];
          newTodoList.push(value);
          setTodoList(newTodoList);
        }}
      />
      {todoList.map((element, index) => {
        return (
          <Todo
            key={element.id}
            todo={element}
            onDelete={() => {
              const newTodoList = [...todoList];
              newTodoList.splice(index, 1);
              setTodoList(newTodoList);
            }}
            onDone={() => {
              const newTodoList = [...todoList];
              newTodoList[index].isDone = !newTodoList[index].isDone;
              setTodoList(newTodoList);
            }}
          />
        );
      })}
    </div>
  );
}

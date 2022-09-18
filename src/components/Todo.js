export default function Todo(props) {
  return (
    <div>
      <ul>
        <li>{props.todo.name}</li>
        <li>{new Date(props.todo.date.toString()).toLocaleString("fr-Fr")}</li>
        <li>
          <input
            id={props.todo.id}
            name={props.todo.name}
            type="checkbox"
            checked={props.todo.isDone}
            onChange={() => {
              props.onDone();
            }}
          />
        </li>
      </ul>
      <button
        onClick={() => {
          props.onDelete();
        }}
      >
        Delete
      </button>
    </div>
  );
}

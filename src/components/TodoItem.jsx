const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <div className="todoList" style={{ margin: "14px 0", padding: "20px 15px", borderRadius: 10, backgroundColor: "rgba(255,255,255, 0.1)", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)"}}>
      <div style={todo.completed ? { textDecoration: "line-through" } : {}}>
        {todo.completed ? "⦾" : "○"} {todo.todo}
      </div>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <div>{todo.time}</div>
        <input type="checkbox" checked={todo.completed} onChange={onToggle} />
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;

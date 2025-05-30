import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onToggle }) => {
  if (todos.length === 0) return <div>Your To-Do List is Empty 📝</div>;

  return todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      onDelete={() => onDelete(todo.id)}
      onToggle={() => onToggle(todo)}
    />
  ));
};

export default TodoList;

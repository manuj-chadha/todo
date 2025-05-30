import { useEffect, useState } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import TodoFilterSort from "../components/TodoFilterSort";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem("todos")) || []);
  const [filter, setFilter] = useState("all");
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [sortOrder, setSortOrder] = useState("default");

  const handleAdd = () => {
    if (input.trim()) {
      setTodos([
        {
          id: Date.now(),
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true }),
          todo: input,
          completed: false,
        },
        ...todos,
      ]);
      setInput("");
    }
  };

  const handleDelete = (id) => setTodos(todos.filter(todo => todo.id !== id));

  const handleToggle = (target) =>
    setTodos(todos.map(todo =>
      todo.id === target.id ? { ...todo, completed: !todo.completed } : todo
    ));

  const handleEnter = (e) => e.key === "Enter" && handleAdd();
  const handleChange = (e) => setInput(e.target.value);

  const toggleFilter = () => setShowFilterOptions(prev => !prev);

  const getProcessedTodos = () => {
    let filtered = todos;
  
    // Filter first
    if (filter === "completed") {
      filtered = todos.filter(todo => todo.completed);
    } else if (filter === "incomplete") {
      filtered = todos.filter(todo => !todo.completed);
    }
  
    // Then sort
    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.todo.localeCompare(b.todo));
    } else if (sortOrder === "desc") {
      filtered.sort((a, b) => b.todo.localeCompare(a.todo));
    } else if (sortOrder === "earliest") {
      filtered.sort((a, b) => a.id - b.id); // oldest first
    } else if (sortOrder === "latest") {
      filtered.sort((a, b) => b.id - a.id); // newest first
    }
  
    return filtered;
  };
  

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <div style={{ fontSize: "30px", fontWeight: "bolder", margin: "20px 0", textAlign: "center" }}>
        TODO Application
      </div>

      <TodoInput input={input} onChange={handleChange} onEnter={handleEnter} onClick={handleAdd} />

      <TodoFilterSort
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        filter={filter}
        setFilter={setFilter}
        showFilters={showFilterOptions}
        toggleFilter={toggleFilter}
      />

      <TodoList todos={getProcessedTodos()} onDelete={handleDelete} onToggle={handleToggle} />
    </div>
  );
};

export default Todo;

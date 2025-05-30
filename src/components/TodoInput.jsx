const TodoInput = ({ input, onChange, onEnter, onClick }) => {
  return (
    <div className="todoList" style={{ border: "2px groove grey", padding: 15, borderRadius: 10, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)" }}>
      <input
        type="text"
        value={input}
        onChange={onChange}
        onKeyDown={onEnter}
        placeholder="Add a todo, be productive."
        style={{
          background: "none",
          fontSize: 15,
          padding: "5px 10px",
          outline: "none",
          border: 1,
          borderColor: "white",
          width: "40vw",
        }}
      />
      <button onClick={onClick}>Add</button>
    </div>
  );
};

export default TodoInput;

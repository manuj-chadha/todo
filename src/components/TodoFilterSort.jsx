import { useState } from "react";
import "../css/TodoFilterSort.css";

const TodoFilterSort = ({ sortOrder, toggleSort, setSortOrder, filter, setFilter, showFilters, toggleFilter }) => {
  const [showSortOptions, setShowSortOptions] = useState(false);

  const handleSortSelect = (order) => {
    setSortOrder(order);
    setShowSortOptions(false);
  };

  return (
    <div className="filter-sort-container">
      <p className="filter-title" style={{fontSize: "20px", fontWeight:"bolder"}}>List of TODOs</p>

      <div className="filter-buttons">
        <div className="dropdown-container">
          <button className="sort-btn" onClick={() => setShowSortOptions((prev) => !prev)}>
            Sort ↕️
          </button>
          {showSortOptions && (
            <div className="sort-dropdown">
              {["asc", "desc", "earliest", "latest"].map((type) => (
                <div
                  key={type}
                  className={`dropdown-option ${sortOrder === type ? "active" : ""}`}
                  onClick={() => handleSortSelect(type)}
                >
                  {{
                    asc: "A-Z",
                    desc: "Z-A",
                    earliest: "Earliest",
                    latest: "Latest",
                  }[type]}
                </div>
              ))}
              
            </div>
          )}
        </div>

        <div className="dropdown-container">
          <button className="filter-btn" onClick={toggleFilter}>
            Filter 🧪
          </button>
          {showFilters && (
            <div className="filter-dropdown">
              {["all", "completed", "incomplete"].map((type) => (
                <div
                  key={type}
                  className={`dropdown-option ${filter === type ? "active" : ""}`}
                  onClick={() => setFilter(type)}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoFilterSort;

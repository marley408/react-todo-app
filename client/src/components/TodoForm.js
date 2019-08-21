import React from 'react';

const TodoForm = () => {
  return (
    <div className="form-container">
      <form>
        <div className="form-group">
          <input
            type="email"
            className="form text-center form-control"
            aria-describedby="emailHelp"
            placeholder="Enter Todo"
          />
        </div>

        <button
          type="submit"
          className="form-buttons add-button btn btn-danger"
        >
          Add Todo
        </button>
        <button type="submit" className="form-buttons btn btn-danger">
          Clear All Todos
        </button>
      </form>
    </div>
  );
};

export default TodoForm;

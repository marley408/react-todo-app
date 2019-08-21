import React from 'react';

const TodoList = () => {
  return (
    <div className="list-container">
      <ul className="list-group">
        {/* <li className="list-item list-group-item d-flex justify-content-between align-items-center">
          Cras justo odio Cras justo odio Cras justo odio
          <button type="submit" className="delete-button btn btn-danger">
            Delete
          </button>
        </li> */}
        <li className="list-item list-group-item d-flex justify-content-between align-items-center">
          Cras justo odio Cras justo odio Cras justo odio
          <button type="submit" className="delete-button">
            <i class="far fa-trash-alt"></i>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TodoList;

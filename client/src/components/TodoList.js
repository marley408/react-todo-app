import React from 'react';

const TodoList = ({ todoList, setTodoList }) => {
  const deleteButton = currItem => {
    const filteredItems = todoList.filter((el, index) => {
      return index !== currItem;
    });
    localStorage.setItem('todoItems', JSON.stringify(filteredItems));

    setTodoList(filteredItems);
  };
  return (
    <div className="list-container">
      {todoList.length > 0
        ? todoList.map((todos, index) => {
            return (
              <ul className="list-group" key={index}>
                <li className="list-item list-group-item d-flex justify-content-between align-items-center">
                  {todos}
                  <button
                    onClick={() => deleteButton(index)}
                    className="delete-button"
                  >
                    <i className="far fa-trash-alt"></i>
                  </button>
                </li>
              </ul>
            );
          })
        : null}
    </div>
  );
};

export default TodoList;

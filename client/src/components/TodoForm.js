import React, { useState, useEffect, useRef } from 'react';
import TodoList from './TodoList';

const TodoForm = () => {
  const [todoList, setTodoList] = useState([]);
  const todoInput = useRef(null);

  useEffect(() => {
    const currentTodos = JSON.parse(localStorage.getItem('todoItems')) || [];
    setTodoList(currentTodos);
  }, []);

  const handleAddTodo = e => {
    e.preventDefault();
    const updatedTodoList = [todoInput.current.value, ...todoList];
    console.log(updatedTodoList);
    localStorage.setItem('todoItems', JSON.stringify(updatedTodoList));
    setTodoList(updatedTodoList);
    todoInput.current.value = '';
  };

  const handleClearTodos = e => {
    e.preventDefault();
    localStorage.removeItem('todoItems');
    setTodoList([]);
  };

  return (
    <div className="todo-container container col-lg-4">
      <div className="form-container">
        <form onSubmit={handleAddTodo}>
          <div className="form-group">
            <input
              ref={todoInput}
              type="text"
              className="form text-center form-control"
              placeholder="Enter Todo"
            />
          </div>

          <button
            type="submit"
            className="form-buttons add-button btn btn-danger"
          >
            Add Todo
          </button>
          <button
            onClick={handleClearTodos}
            className="form-buttons btn btn-danger"
          >
            Clear All Todos
          </button>
        </form>
      </div>
      <TodoList todoList={[...todoList]} setTodoList={setTodoList} />
    </div>
  );
};

export default TodoForm;

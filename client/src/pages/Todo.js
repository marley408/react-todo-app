import React from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

const Todo = () => {
  return (
    <div className="todo-container container col-lg-4">
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Todo;

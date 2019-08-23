import React, { useState, createContext } from 'react';

// this is imported to the components that use this provider
export const UserContext = createContext({});

// create user provider. this holds info and passes it down to
export const UserProvider = props => {
  const [todoList, setTodoList] = useState([]);

  // need to set inital state because page will might refresh
  const INITIAL_STATE = {
    todoList: todoList,
    setTodoList: setTodoList
  };

  return (
    <UserContext.Provider value={INITIAL_STATE}>
      {props.children}
    </UserContext.Provider>
  );
};

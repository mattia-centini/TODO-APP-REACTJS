import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  //add finctionality to buttons
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed, // this will set the state to true and vice versa
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : " "}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="complete-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;

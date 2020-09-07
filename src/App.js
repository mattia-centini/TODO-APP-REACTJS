import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //the hooks are in App.js so they can be passed down to components
  //the reason we are using hooks - once we set our state we can use that data everywhere
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Todo App With React {inputText}</h1>
      </header>
      {/* pass in the hooks as props */}
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

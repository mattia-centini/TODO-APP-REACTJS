import React from "react";

function Form({ inputText, setInputText, todos, setTodos }) {
  //destructoring the prop to avoid typing props.name
  const inputTextHandler = (e) => {
    //this function handels the input value
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    //this function handles the submit button
    e.preventDefault();
    setTodos([
      //spreading the todos(which means create an array with all the todos i created), and add the new todo object
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 100,
      },
    ]);
    setInputText(""); //set the STATE HOOK to an empty string once the function runs//DOESN'T UPDATE THE UI
  };
  return (
    <form className="form-wrap">
      <input
        value={inputText} //this set the UI input value to blank once submitted
        onChange={inputTextHandler}
        type="text"
        placeholder="...add Todo"
      />
      <button type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
}
export default Form;

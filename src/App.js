import React, { useState } from "react";
import "./App.scss";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setItem] = useState([
    {
      id: 1,
      title: "abc",
    },
    {
      id: 2,
      title: "abcd",
    },
    {
      id: 3,
      title: "abce",
    },
    {
      id: 4,
      title: "abcf",
    },
  ]);

  function handleOnClick(todo) {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setItem(newTodoList);
  }
  function handleTodoFormSubmit(formValues) {
    console.log("for submit:", formValues);
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setItem(newTodoList);
  }
  return (
    <div className="app">
      <h1>React Hooks- TodoList</h1>

      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleOnClick} />
    </div>
  );
}

export default App;

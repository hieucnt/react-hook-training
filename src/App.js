import React, { useState } from "react";
import "./App.scss";
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
  return (
    <div className="app">
      <h1>React Hooks- TodoList</h1>

      <TodoList todos={todoList} onTodoClick={handleOnClick} />
    </div>
  );
}

export default App;

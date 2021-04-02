import React, { useEffect, useState } from "react";
import queryString from "query-string";
import "./App.scss";
import PostList from "./components/PostList";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Pagination from "./components/Pagination";
import PostFilterForm from "./components/PostFilterForm";
import Clock from "./components/Clock";

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

  const [postList, setListPost] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 11,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: "",
  });

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramString = queryString.stringify(filters);

        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });

        const { data, pagination } = responseJSON;
        setListPost(data);
        setPagination(pagination);
      } catch (error) {
        console.log("failed to fetch post link", error.message);
      }
    }

    fetchPostList();
  }, [filters]);

  function handlePageChange(newPage) {
    console.log("New Page:", newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

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

  function handleFilterChange(newFilter) {
    console.log(newFilter);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilter.searchTerm,
    });
  }

  const [showClock, setHiddenClock] = useState(true);
  return (
    <div className="app">
      <h1>React Hooks- TodoList</h1>

      {/* <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleOnClick} /> */}
      {/* <PostFilterForm onSubmit={handleFilterChange} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}
      {showClock && <Clock />}
      <button onClick={() => setHiddenClock(false)}>Hidden</button>
    </div>
  );
}

export default App;

import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
  todo: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultPros = {
  todo: [],
  onTodoClick: null
}

function TodoList(props) {

  const {todos, onTodoClick} = props;

  function handleClick(todo){
    if(onTodoClick)
    onTodoClick(todo);
  }

  return (
    <div>
      <ul className="todo-list">
        {todos.map(todo =>(
          <li key={todo.id} onClick={()=>handleClick(todo)}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
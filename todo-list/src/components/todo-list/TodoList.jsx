import React from "react";
import TodoListItem from "../todo-list-item/TodoListItem";
import "./todo-list.css";

const TodoList = ({ todos, onDelete, onImpot }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onDelete={() => onDelete(id, "123")}
          onImpot={() => onImpot(id, "123")}
        />
      </li>
    );
  });
  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;

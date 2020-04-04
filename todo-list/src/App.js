import React from "react";
import "./App.css";
import AppHeader from "./components/app-header/AppHeader";
import { SearchPanel } from "./components/search-panel/SearchPanel";
import TodoList from "./components/todo-list/TodoList";
import AddForm from "./components/add-form/AddForm";
import ItemStatusFilter from "./components/item-status-filter/ItemStatusFilter";

import "./App.css";

const App = () => {
  const todoData = [
    { label: "Drink Coffee", important: false, id: 1 },
    { label: "Make Awesome App", important: true, id: 2 },
    { label: "Have a lunch", important: false, id: 3 },
  ];

  const onDelete = (id) => {
    console.log(id);
  };

  const onImpot = (id) => {
    console.log(id);
  };

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} onDelete={onDelete} onImpot={onImpot} />
      <AddForm />
    </div>
  );
};

export default App;

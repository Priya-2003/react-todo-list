import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Demo from "./components/Demo";
import State from "./components/State";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";

function App() {
  return (
    <div className="todo-app">
      <TodoList />
      {/* <State />
      <FunctionClick />
      <ClassClick /> */}
      {/* <Demo /> */}
    </div>
  );
}

export default App;

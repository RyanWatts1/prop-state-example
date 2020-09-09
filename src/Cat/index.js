import React from "react";
import "../App.css";

const Cat = ({ alt, todos = [] }) => {
  return (
    <div className={`${alt ? "Green" : "Sand"} Cat`}>
      {todos.map((todo) => {
        return <p key={todo.id}>{todo.title}</p>;
      })}
    </div>
  );
};
export default Cat;

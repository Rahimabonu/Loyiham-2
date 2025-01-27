import TodoItem from "./todoItem";
import { useState } from "react";
const Todo = () => {
    const [todos, setTodos] =useState([
        {title: "Homework"},
        {title: "Go to shcool"},

    ]) 
    console.log(todos);
    
  return (
    <>
      <div className="todo-container">
        <h2 className="app-title">Todo App</h2>
        <div className="todo-header">
          <input
            className="add-input"
            type="text"
            placeholder="Vazifa yozing..."
          />
          <button className="add-btn">Add</button>
        </div>
        <div className="todo-list">
            {
                todos.map( t =>{
                    return(
                        <TodoItem title={t.title}/>
                    )
                })
            }
        </div>
      </div>
    </>
  );
};

export default Todo;

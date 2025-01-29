import TodoItem from "./todoItem";
import { useState } from "react";
const Todo = () => {
  const [inputValue, setInputValue]=useState("")
    const [todos, setTodos] =useState([
        {
          id:1,
          title: "Homework"
        },

    ]) 
    // console.log(todos);

    const onAddClick =() =>{
      const newTodos =[...todos, {id: todos.length+1, title:inputValue}]
      console.log(newTodos);
      setTodos(newTodos)
      setInputValue("")
    }
    
  return (
    <>
      <div className="todo-container">
        <h2 className="app-title">Todo App</h2>
        <div className="todo-header">
          <input value={inputValue} onChange={(event)=> setInputValue(event.target.value)}
            className="add-input"
            type="text"
            placeholder="Vazifa yozing..."
          />
          <button onClick={onAddClick} className="add-btn">Add</button>
        </div>
        <h1> {inputValue}</h1>
        <div className="todo-list">
            {
                todos.map( t =>{
                    return(
                        <TodoItem id={t.id} title={t.title}/>
                    )
                })
            }
        </div>
      </div>
    </>
  );
};

export default Todo;

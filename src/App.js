import React from "react";
import Form from "./components/Form.js";
import Todo from "./components/Todo.js";
import './App.css';

function TodoApp() {
  const savedItems = JSON.parse(localStorage.getItem('todos'));

  const [todos, setTodos] = React.useState(savedItems || []);
  
  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = text => {
    const newTodos = [...todos, { text, isEditing: false }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isComplete = !newTodos[index].isComplete;
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = (index, newName) => {
    const newTodos = [...todos];
    newTodos[index].text = newName;
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <div className="todo-list">
        <h1>Todo</h1>
        <Form addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoApp;

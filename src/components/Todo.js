import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

function Todo({ todo, index, completeTodo, deleteTodo, editTodo }) {
    const [isEditing, setEditing] = React.useState(false);
    const [newName, setNewName] = React.useState(todo.text);
  
    const handleChange = event => {
      setNewName(event.target.value)
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      editTodo(index, newName);
      setNewName("");
      setEditing(false);
    };
  
    const editingTodo = (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={newName}
          onChange={handleChange}
        />
      </form>
    );
  
    const displayTodo = (
      <div
        className="todo"
        style={{ textDecoration: todo.isComplete ? "line-through" : "" }}
      >
        {todo.text}
        <div>
          <FontAwesomeIcon
            icon={faEdit}
            onClick={() => setEditing(true)}
            border
            fixedWidth
          />
          <FontAwesomeIcon 
            icon={faCheck}
            onClick={() => completeTodo(index)}
            border
            fixedWidth
          />
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => deleteTodo(index)}
            border
            fixedWidth
          />
        </div>
      </div>
    );
  
    return (<div>{isEditing ? editingTodo : displayTodo}</div>);
  
  };

export default Todo;
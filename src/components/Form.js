import React from "react";

function Form({ addTodo }) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = event => {
      event.preventDefault();
      if(!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
      </form>
    );
  }

  export default Form;
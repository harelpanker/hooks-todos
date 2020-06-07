import React from "react";
import UseInputState from "./hooks/useInputState";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

export default function TodoForm({ addTodo }) {
  const [value, handleChange, reset, prevDefault] = UseInputState("");
  return (
    <Paper style={{ margin: "1rem 0", padding: "1rem" }}>
      <form
        onSubmit={(e) => {
          prevDefault(e);
          addTodo(value);
          reset("");
        }}>
        <TextField
          value={value}
          onChange={handleChange}
          label='Add new Todo'
          fullWidth
        />
      </form>
    </Paper>
  );
}

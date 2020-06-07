import React from "react";
import useInputState from "./hooks/useInputState";
import TextField from "@material-ui/core/TextField";

export default function EditTodoForm({ id, task, toggleEditForm, editTodo }) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      style={{ margin: "0 1rem", width: "100%" }}
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset("");
        toggleEditForm();
      }}>
      <TextField autoFocus fullWidth value={value} onChange={handleChange} />
    </form>
  );
}

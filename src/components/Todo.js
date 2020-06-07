import React from "react";
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";

import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

export default function Todo({
  id,
  task,
  complited,
  removeTodo,
  toggleTodo,
  editTodo,
}) {
  const [isEditing, toggle] = useToggleState(false);

  return (
    <Paper>
      {isEditing ? (
        <ListItem style={{ marginBottom: ".4rem" }}>
          <EditTodoForm
            id={id}
            task={task}
            toggleEditForm={toggle}
            editTodo={editTodo}
          />
        </ListItem>
      ) : (
        <>
          <ListItem style={{ marginBottom: ".4rem" }}>
            <Checkbox
              checked={complited}
              tabIndex={-1}
              onClick={() => toggleTodo(id)}
            />
            <ListItemText
              style={{
                textDecoration: `${complited ? "line-through" : "none"}`,
                paddingRight: "60px",
              }}>
              {task}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton aria-label='Edit' onClick={toggle}>
                <EditIcon />
              </IconButton>
              <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </>
      )}
    </Paper>
  );
}

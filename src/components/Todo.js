import React from "react";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

export default function Todo({ id, task, complited, removeTodo, toggleTodo }) {
  return (
    <Paper>
      <ListItem style={{ marginBottom: ".4rem" }}>
        <Checkbox
          checked={complited}
          tabIndex={-1}
          onClick={() => toggleTodo(id)}
        />
        <ListItemText
          style={{
            textDecoration: `${complited ? "line-through" : "none"}`,
          }}>
          {task}
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton aria-label='Edit'>
            <EditIcon />
          </IconButton>
          <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Paper>
  );
}

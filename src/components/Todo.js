import React from "react";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

export default function Todo({ todo }) {
  return (
    <Paper>
      <ListItem style={{ marginBottom: ".4rem" }}>
        <Checkbox checked={todo.complited} tabIndex={-1} />
        <ListItemText
          style={{
            textDecoration: `${todo.complited ? "line-through" : "none"}`,
          }}>
          {todo.task}
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton aria-label='Edit'>
            <EditIcon />
          </IconButton>
          <IconButton aria-label='Delete'>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </Paper>
  );
}

import React from "react";
import Todo from "./Todo";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";

export default function TodoList({ todos }) {
  return (
    <Paper style={{ backgroundColor: "transparent" }}>
      <List>
        {todos.map((todo) => (
          <>
            <Todo key={todo.id} todo={todo} />
          </>
        ))}
      </List>
    </Paper>
  );
}

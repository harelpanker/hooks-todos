import React from "react";
import Todo from "./Todo";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";

export default function TodoList({ todos, removeTodo, toggleTodo }) {
  return (
    <Paper style={{ backgroundColor: "transparent" }}>
      <List>
        {todos.map((todo) => (
          <React.Fragment key={todo.id}>
            <Todo
              id={todo.id}
              task={todo.task}
              complited={todo.complited}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
            />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}

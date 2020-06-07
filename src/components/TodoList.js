import React from "react";
import Todo from "./Todo";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";

export default function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  return (
    <Paper style={{ backgroundColor: "transparent" }}>
      <List style={{ padding: 0 }}>
        {todos.map((todo) => (
          <React.Fragment key={todo.id}>
            <Todo
              id={todo.id}
              task={todo.task}
              complited={todo.complited}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}

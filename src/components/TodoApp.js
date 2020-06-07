import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import uuid from "react-uuid";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

export default function TodoApp() {
  const initialTodos = [
    { id: uuid(), task: "Learn React", complited: false },
    { id: uuid(), task: "Learn React Hooks", complited: true },
    { id: uuid(), task: "Learn Figma", complited: false },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: uuid(), task: newTodoText, complited: false }]);
  };

  return (
    <div>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#282c34",
          minHeight: "100vh",
          color: "#ffffff",
        }}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6'>Todo App</Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify='center' style={{ marginTop: "2rem" }}>
          <Grid item xs={11} sm={8} md={4} lg={4}>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

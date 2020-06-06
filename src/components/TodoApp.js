import React, { useState } from "react";
import TodoList from "./TodoList";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Grid from "@material-ui/core/Grid";

export default function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Learn React", complited: false },
    { id: 2, task: "Learn React Hooks", complited: false },
    { id: 3, task: "Learn Figma", complited: false },
  ];

  const [todos, setTodos] = useState(initialTodos);

  return (
    <div>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#282c34",
          minHeight: "100vh",
          color: "#ffffff",
        }}>
        <AppBar position='static' style={{ height: "64px" }}>
          <Toolbar>
            <Typography variant='h6'>Todo App</Typography>
          </Toolbar>
        </AppBar>
        <TodoList todos={todos} />
      </Paper>
    </div>
  );
}

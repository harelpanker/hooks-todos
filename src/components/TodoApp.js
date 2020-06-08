import React from "react";
import useTodoState from "./hooks/useTodoState";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

export default function TodoApp() {
  const initialTodos = [];
  const { todos, addTodo, removeTodo, editTodo, toggleTodo } = useTodoState(
    initialTodos
  );

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
            <TodoList
              todos={todos}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import uuid from "react-uuid";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

export default function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: uuid(), task: newTodoText, complited: false }]);
  };

  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  };

  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, complited: !todo.complited } : todo
    );
    setTodos(updatedTodos);
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

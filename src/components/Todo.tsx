// Libriries
import { ChangeEvent, ReactElement, SetStateAction, useState } from "react";

// Components
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";

// Types
import { todo, Visibility } from "../types/types";

// Styles
import "./Todo.css";

export default function Todo(): ReactElement {
  const [todos, setTodos] = useState<todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [visibility, setVisibility] = useState<Visibility>("all");

  const handleNewTodo = (e: {
    target: { value: SetStateAction<string> };
  }): void => setNewTodo(e.target.value);

  const addTodo = (): void => {
    const newTodos: todo[] = [
      ...todos,
      { name: newTodo, checked: false, created: new Date().getTime() }
    ];
    setTodos(newTodos);
    setNewTodo("");
  };

  const checkTodo = (todoName: string): void => {
    const newTodos = todos.map(({ checked, created, name }) => {
      if (name === todoName) {
        return { name, checked: !checked, created };
      }

      return { checked, created, name };
    });

    setTodos(newTodos);
  };

  const deleteTodo = (todoName: string): void =>
    setTodos(todos.filter(({ name }) => name !== todoName));

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) =>
    setVisibility(e.target.value);

  const filteredTodos =
    visibility === "completed"
      ? todos.filter(({ checked }) => !!checked)
      : visibility === "pending"
      ? todos.filter(({ checked }) => !checked)
      : todos;

  return (
    <div className="todos">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, height: "4em", width: "25ch" }
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          className="todos-input"
          id="outlined-basic"
          label="Add todo"
          variant="outlined"
          onChange={handleNewTodo}
          value={newTodo}
        />

        <Button
          className="todos-button"
          disabled={newTodo === ""}
          onClick={addTodo}
          startIcon={<AddIcon />}
          // size="small"
          variant="outlined"
        >
          Add
        </Button>
      </Box>

      {filteredTodos.length > 0 && (
        <TodoFilter handleChange={handleFilter} value={visibility} />
      )}

      {filteredTodos.length > 0 && (
        <TodoList
          deleteTodo={deleteTodo}
          toggleTodo={checkTodo}
          todos={filteredTodos}
        />
      )}
    </div>
  );
}

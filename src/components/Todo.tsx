// Libriries
import { ReactElement, SetStateAction, useState } from "react";

// Components
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TodoList from "./TodoList";

// Types
import { todo } from "../types/types";

// Styles
import "./Todo.css";

export default function Todo(): ReactElement {
  const [todos, setTodos] = useState<todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

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
          id="outlined-basic"
          label="Add todo"
          variant="outlined"
          onChange={handleNewTodo}
          value={newTodo}
        />

        <Button
          disabled={newTodo === ""}
          onClick={addTodo}
          startIcon={<AddIcon />}
          // size="small"
          variant="outlined"
        >
          Add
        </Button>
      </Box>

      {todos && (
        <TodoList
          deleteTodo={deleteTodo}
          toggleTodo={checkTodo}
          todos={todos}
        />
      )}
    </div>
  );
}

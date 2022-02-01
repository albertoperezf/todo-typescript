// Libriries
import {
  ChangeEvent,
  ReactElement,
  SetStateAction,
  useEffect,
  useState
} from "react";

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
  const [parseTodos, setParseTodos] = useState<todo[]>([]);
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

  useEffect(() => {
    if (visibility === "completed") {
      const parse = todos.filter(({ checked }) => checked === true);

      console.log("Parse #1: ", parse);

      setParseTodos(parse);
    } else if (visibility === "pending") {
      const parse = todos.filter(({ checked }) => checked === false);

      console.log("Parse #2: ", parse);

      setParseTodos(parse);
    } else {
      setParseTodos(todos);
    }
  }, [todos, visibility]);

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

      {parseTodos.length > 0 && (
        <TodoFilter handleChange={handleFilter} value={visibility} />
      )}

      {parseTodos.length > 0 && (
        <TodoList
          deleteTodo={deleteTodo}
          toggleTodo={checkTodo}
          todos={parseTodos}
        />
      )}
    </div>
  );
}

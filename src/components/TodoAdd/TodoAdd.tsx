// Libriries
import { ReactElement } from "react";

// Components
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

// Types
import { TodoAddProps } from "../types/types";

/**
 * TodoAdd - Search box and add button for the Todos app
 */
export default function TodoAdd(props: TodoAddProps): ReactElement {
  const { addTodo, handleNewTodo, newTodo } = props;

  return (
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
        variant="outlined"
      >
        Add
      </Button>
    </Box>
  );
}

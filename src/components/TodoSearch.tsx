// Libraries
import { ReactElement } from "react";

// Components
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

// Types
import { TodoSearchProps } from "../types/types";

// Styles
// import "./TodoFilter.css";

/**
 * TodoSearch - Show a search box  to filter the Todos
 */
export default function TodoSearch(props: TodoSearchProps): ReactElement {
  const { handleSearchChange, searchValue } = props;

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
        label="Search todo"
        variant="outlined"
        onChange={handleSearchChange}
        value={searchValue}
      />
    </Box>
  );
}

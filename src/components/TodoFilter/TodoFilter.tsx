// Libraries
import { ReactElement } from "react";

// Components
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TodoSearch from "../TodoSearch/TodoSearch";

// Types
import { TodoFilterProps } from "../../types/types";

// Styles
import "./TodoFilter.css";

/**
 * TodoFilter - Show the filter posibilities for the TodoList
 */
export default function TodoFilter(props: TodoFilterProps): ReactElement {
  const { handleChange, handleSearchChange, searchValue, todos, value } = props;
  const completedTodos = todos.filter(({ checked }) => !!checked);
  const pendingTodos = todos.filter(({ checked }) => !checked);

  return (
    <FormControl className="todo-filters">
      <FormLabel
        className="todo-filters-label"
        id="demo-row-radio-buttons-group-label"
      >
        Show
      </FormLabel>
      <RadioGroup
        className="todo-filters-group"
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="all"
          control={<Radio />}
          label={`All (${!!todos ? todos.length : 0})`}
        />
        <FormControlLabel
          value="completed"
          control={<Radio />}
          label={`Completed (${!!completedTodos ? completedTodos.length : 0})`}
        />
        <FormControlLabel
          value="pending"
          control={<Radio />}
          label={`Pending (${!!pendingTodos ? pendingTodos.length : 0})`}
        />
      </RadioGroup>

      <FormLabel
        className="todo-filters-label"
        id="demo-row-radio-buttons-group-label"
      >
        Search
      </FormLabel>

      <TodoSearch
        searchValue={searchValue}
        handleSearchChange={handleSearchChange}
      />
    </FormControl>
  );
}

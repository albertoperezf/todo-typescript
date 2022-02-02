// Libraries
import { ReactElement } from "react";

// Components
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

// Types
import { TodoFilterProps } from "../types/types";

// Styles
import "./TodoFilter.css";

export default function TodoFilter(props: TodoFilterProps): ReactElement {
  const { handleChange, value } = props;

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
        <FormControlLabel value="all" control={<Radio />} label="All" />
        <FormControlLabel
          value="completed"
          control={<Radio />}
          label="Completed"
        />
        <FormControlLabel value="pending" control={<Radio />} label="Pending" />
      </RadioGroup>
    </FormControl>
  );
}

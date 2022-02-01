// Libraries
import { ReactElement } from "react";

// Components
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

// Types
import { TodoFilterProps } from "../types/types";

export default function TodoFilter(props: TodoFilterProps): ReactElement {
  const { handleChange, value } = props;

  console.log("Value: ", value);

  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Show</FormLabel>
      <RadioGroup
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

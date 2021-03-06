// Libraries
import { ReactElement, memo } from "react";

// Componets
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";

// Icons
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

// Types
import { TodoListProps } from "../types/types";

// Styles
import "./TodoList.css";

// Memoizing the list to avoid unnecesary re-renders
const Item = memo(ListItem);

/**
 * TodoList - Display all the todos currently added on the app
 */
export default function TodoList(props: TodoListProps): ReactElement {
  const { deleteTodo, todos, toggleTodo } = props;

  return (
    <List className="list">
      {todos &&
        todos.map(({ name, checked, created }, i) => {
          const labelId = `checkbox-list-label-${name}`;

          return (
            <Item
              className="list-item"
              key={name}
              secondaryAction={
                <>
                  <IconButton
                    edge="end"
                    aria-label="comments"
                    onClick={() => deleteTodo(name)}
                  >
                    <DeleteIcon />
                  </IconButton>

                  <Tooltip title={`Created: ${new Date(created)}`}>
                    <IconButton edge="end" aria-label="comments">
                      <InfoIcon />
                    </IconButton>
                  </Tooltip>
                </>
              }
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={() => toggleTodo(name)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  primary={name}
                  sx={checked ? { textDecoration: "line-through" } : {}}
                />
              </ListItemButton>
            </Item>
          );
        })}
    </List>
  );
}

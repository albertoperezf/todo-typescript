// Libraries
import { ChangeEvent, SetStateAction } from "react";

// Type for the todos of the list
export interface todo {
  name: string;
  checked: boolean;
  created: number;
}

export interface TodoListProps {
  todos: todo[];
  deleteTodo: (todoName: string) => void;
  toggleTodo: (todoName: string) => void;
}

export type Visibility = "all" | "completed" | "pending";

export interface TodoSearchProps {
  searchValue: string;
  handleSearchChange: (event: {
    target: { value: SetStateAction<string> };
  }) => void;
}

export interface TodoFilterProps extends TodoSearchProps {
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
  todos: todo[];
}

// Props for the TodoAdd component
export interface TodoAddProps {
  newTodo: string;
  handleNewTodo: (e: { target: { value: SetStateAction<string> } }) => void;
  addTodo: () => void;
}

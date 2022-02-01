import { ChangeEvent } from "react";

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

export interface TodoFilterProps {
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
}

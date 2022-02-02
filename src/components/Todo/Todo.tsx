// Libriries
import { ChangeEvent, ReactElement, SetStateAction, useState } from "react";

// Components
import TodoAdd from "../TodoAdd/TodoAdd";
import TodoList from "../TodoList/TodoList";
import TodoFilter from "../TodoFilter/TodoFilter";

// Types
import { todo, Visibility } from "../../types/types";

// Styles
import "./Todo.css";

/**
 * Todo - Main component where is going to be displayed todo list, filters and field to add more todos
 */
export default function Todo(): ReactElement {
  const [todos, setTodos] = useState<todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [visibility, setVisibility] = useState<Visibility>("all");
  const [search, setSearch] = useState<string>("");

  const handleNewTodo = (e: {
    target: { value: SetStateAction<string> };
  }): void => setNewTodo(e.target.value);

  const handleNewSearch = (event: {
    target: { value: SetStateAction<string> };
  }): void => setSearch(event.target.value);

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

  const filteredTodos =
    visibility === "completed"
      ? todos.filter(({ checked }) => !!checked)
      : visibility === "pending"
      ? todos.filter(({ checked }) => !checked)
      : todos;

  const filteredTodoSearch = !!search
    ? filteredTodos.filter(({ name }) => name.includes(search))
    : filteredTodos;

  return (
    <div className="todos">
      <TodoAdd
        addTodo={addTodo}
        newTodo={newTodo}
        handleNewTodo={handleNewTodo}
      />

      {filteredTodoSearch.length > 0 && (
        <TodoFilter
          handleChange={handleFilter}
          handleSearchChange={handleNewSearch}
          searchValue={search}
          value={visibility}
        />
      )}

      {filteredTodoSearch.length > 0 && (
        <TodoList
          deleteTodo={deleteTodo}
          toggleTodo={checkTodo}
          todos={filteredTodoSearch}
        />
      )}
    </div>
  );
}

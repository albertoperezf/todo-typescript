// Libraries
import { ReactElement } from "react";

// Components
import ButtonAppBar from "./components/AppBar";
import Todo from "./components/Todo";

// Styles
import "./styles.css";

/**
 * App - Main file, display the AppBar and the Todos logic
 */
export default function App(): ReactElement {
  return (
    <div className="App">
      <ButtonAppBar />

      <Todo />
    </div>
  );
}

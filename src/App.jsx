import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./css/Task.css";
import { useContext } from "react";
import { TaskContext } from "./context/TaskContext";
import { isEmpty } from "lodash";

function App() {
  const { tasks } = useContext(TaskContext);
  return (
    <main className="main">
      <div>
        <TaskForm />
        <div className={isEmpty(tasks) ? "container" : "container1"}>
          <TaskList />
        </div>
      </div>
    </main>
  );
}

export default App;

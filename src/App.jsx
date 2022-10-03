import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./css/Task.css";

function App() {
  return (
    <main className="main">
      <div>
        <TaskForm />
        <div className="container1">
          <TaskList />
        </div>
      </div>
    </main>
  );
}

export default App;

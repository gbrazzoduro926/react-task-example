import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Toast } from "react-bootstrap";
import "../css/Task.css";

function taskcard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="task-toast">
      <Toast>
        <Toast.Header className="task-toast-header" closeButton={false}>
          {task.title}
          <button
            type="button"
            className="btn-close button-clear"
            aria-label="Close"
            data-dismiss="toast"
            onClick={() => deleteTask(task.id)}
          ></button>
        </Toast.Header>
        <div className="task-toast-description">
          <p>{task.description}</p>
        </div>
      </Toast>
    </div>
  );
}

export default taskcard;

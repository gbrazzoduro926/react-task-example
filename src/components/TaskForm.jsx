import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Form, Button } from "react-bootstrap";
import { isEmpty } from "lodash";
import "../css/Task.css";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState({
    titulo: "",
    descripcion: "",
  });
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmpty(title) || isEmpty(description)) {
      alert("Todos los campos deben son obligatorios");
    } else {
      createTask({
        title,
        description,
      });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="form">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Tarea</Form.Label>
          <Form.Control
            type="task"
            placeholder="Escribe tu tarea..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            autoFocus
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="description"
            placeholder="Escribe la descripción de la tarea..."
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </Form.Group>
        <div className="button-save-form">
          <Button variant="danger" type="submit">
            Guardar
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default TaskForm;

import { useState, useEffect } from "react";
import "./App.css";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const API_URL = "http://localhost:8080/api/todos";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");

  const fetchTodos = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setTodos(data);
    } catch (error) {
      console.error("Gagal ambil data:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) return;

    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: input }),
    });

    setInput("");
    fetchTodos();
  };

  const handleToggle = async (todo: Todo) => {
    if (editingId === todo.id) return;

    await fetch(`${API_URL}/${todo.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: todo.title,
        completed: !todo.completed,
      }),
    });
    fetchTodos();
  };

  const handleDelete = async (id: number) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchTodos();
  };

  const startEdit = (todo: Todo) => {
    setEditingId(todo.id);
    setEditTitle(todo.title);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle("");
  };

  const saveEdit = async (todo: Todo) => {
    if (!editTitle) return;

    await fetch(`${API_URL}/${todo.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: editTitle,
        completed: todo.completed,
      }),
    });

    setEditingId(null);
    setEditTitle("");
    fetchTodos();
  };

  return (
    <div className="container">
      <h1>Todo List</h1>

      <form onSubmit={handleAdd} className="form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Mau ngapain hari ini?"
        />
        <button type="submit">Tambah</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "selesai" : ""}>
            {editingId === todo.id ? (
              <div className="edit-mode">
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  autoFocus
                />
                <button onClick={() => saveEdit(todo)} className="btn-simpan">
                  Simpan
                </button>
                <button onClick={cancelEdit} className="btn-batal">
                  Batal
                </button>
              </div>
            ) : (
              <div className="todo-item">
                <span onClick={() => handleToggle(todo)}>{todo.title}</span>
                <div className="actions">
                  <button onClick={() => startEdit(todo)} className="btn-edit">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="btn-hapus"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

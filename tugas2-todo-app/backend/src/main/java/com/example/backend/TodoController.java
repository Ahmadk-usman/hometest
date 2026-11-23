package com.example.backend;

import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "http://localhost:5173")
public class TodoController {

    private List<Todo> todos = new ArrayList<>();
    private Long nextId = 1L;

    @GetMapping
    public List<Todo> getAll() {
        return todos;
    }

    @PostMapping
    public Todo add(@RequestBody Todo todo) {
        todo.setId(nextId++);
        todo.setCompleted(false);
        todos.add(todo);
        return todo;
    }

    @PutMapping("/{id}")
    public Todo update(@PathVariable Long id, @RequestBody Todo updated) {
        for (Todo t : todos) {
            if (t.getId().equals(id)) {
                t.setTitle(updated.getTitle());
                t.setCompleted(updated.isCompleted());
                return t;
            }
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        todos.removeIf(t -> t.getId().equals(id));
        return "Berhasil dihapus";
    }
}
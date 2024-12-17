import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onCompleteTask: (id: number, completed: boolean) => void;
  handleDelete: (id: number) => void;
}

export default function TodoList({
  todos,
  onCompleteTask,
  handleDelete,
}: TodoListProps) {
  const todosSorted = todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }

    return a.completed ? 1 : -1;
  });
  return (
    <div className="space-y-2">
      {todosSorted.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onCompleteTask={onCompleteTask}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

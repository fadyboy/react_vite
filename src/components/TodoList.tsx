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
    /*  Add empty tag to allow for conditional div section */
    <>
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
      {todos.length === 0 && (
        <p className="text-center text-sm text-gray-500">
          Please add a Todo item
        </p>
      )}
    </>
  );
}

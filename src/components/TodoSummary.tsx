import { Todo } from "../types/todo";

interface TodoSummaryProps {
  todos: Todo[];
  deleteCompletedTodos: () => void;
}

export default function TodoSummary({
  todos,
  deleteCompletedTodos,
}: TodoSummaryProps) {
  const completedTodos = todos.filter((todo) => todo.completed);
  return (
    <div className="text-center space-y-2">
      <p className="text-gray-500 text-sm font-medium">
        {completedTodos.length}/{todos.length} todos completed
      </p>
      {completedTodos.length > 0 && (
        <button
          onClick={deleteCompletedTodos}
          className="text-red-500 hover:underline text-sm font-medium"
        >
          Delete completed Todos
        </button>
      )}
    </div>
  );
}

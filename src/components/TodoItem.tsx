import { Todo } from "../types/todo";
import { MdDelete } from "react-icons/md";

interface TodoItemProps {
  todo: Todo;
  onCompleteTask: (id: number, completed: boolean) => void;
  handleDelete: (id: number) => void;
}

export default function TodoItem({
  todo,
  onCompleteTask,
  handleDelete,
}: TodoItemProps) {
  return (
    <div className="flex items-center gap-1">
      <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50 grow">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => onCompleteTask(todo.id, e.target.checked)}
          className="scale-125"
        />
        <span className={todo.completed ? "line-through text-gray-400" : ""}>
          {todo.title}
        </span>
      </label>
      <button onClick={() => handleDelete(todo.id)} className="p-2">
        <MdDelete size={20} />
      </button>
    </div>
  );
}

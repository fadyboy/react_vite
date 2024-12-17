import { useState } from "react";

interface AddTodoProps {
  onSubmit: (title: string) => void;
}

export default function AddTodo({ onSubmit }: AddTodoProps) {
  const [input, setInput] = useState("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // check that field is not empty
    if (!input.trim()) {
      return;
    }
    onSubmit(input);
    setInput("");
  }
  return (
    <div className="p-2">
      <form className="flex" onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo"
          className="rounded-s-md grow border border-gray-400 p-2 grow"
        />
        <button
          type="submit"
          className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-400"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

import { useState } from "react";
import { dummyData } from "./data/todos";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(dummyData);
  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo)),
    );
  }

  function addTodo(title: string) {
    // we are not able to directly modify existing todos so we create a new array
    setTodos((prevTodos) => [
      {
        id: prevTodos.length + 1,
        title,
        completed: false,
      },
      ...prevTodos,
    ]);
  }

  function deleteTodo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  }

  return (
    <main className="py-10 bg-sky-50 h-screen">
      <h1 className="font-bold text-3xl text-center space-y-5 p-5">
        Another TODO App
      </h1>
      <div className="max-w-lg mx-auto bg-slate-200 rounded-md p-5">
        <AddTodo onSubmit={addTodo} />
        <TodoList
          todos={todos}
          onCompleteTask={setTodoCompleted}
          handleDelete={deleteTodo}
        />
      </div>
    </main>
  );
}

export default App;

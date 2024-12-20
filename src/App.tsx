import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";

function App() {
  const {
    addTodo,
    setTodoCompleted,
    deleteAllCompletedTodos,
    deleteTodo,
    todos,
  } = useTodos();
  return (
    <main className="py-10 bg-sky-50 h-screen overflow-y-auto">
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
      <TodoSummary
        todos={todos}
        deleteCompletedTodos={deleteAllCompletedTodos}
      />
    </main>
  );
}

export default App;

import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  // Load todos from localStorage on mount - FIXED VERSION
  useEffect(() => {
    try {
      const storedTodos = localStorage.getItem("todos");
      console.log("Loading from localStorage:", storedTodos);

      if (storedTodos) {
        const parsedTodos = JSON.parse(storedTodos);
        // Validate that it's an array
        if (Array.isArray(parsedTodos)) {
          setTodos(parsedTodos);
        } else {
          console.warn("Stored todos is not an array, resetting...");
          localStorage.removeItem("todos");
        }
      }
    } catch (error) {
      console.error("Error loading todos from localStorage:", error);
      // Clear corrupted data
      localStorage.removeItem("todos");
      setTodos([]);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save todos to localStorage whenever todos change - FIXED VERSION
  useEffect(() => {
    if (!isLoaded) return; // Don't save on initial load

    try {
      console.log("Saving to localStorage:", todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
      alert("Error saving todos! Your browser storage might be full.");
    }
  }, [todos, isLoaded]);

  // Add new todo
  const handleAdd = () => {
    if (input.trim().length < 3) {
      alert("Todo must be at least 3 characters long!");
      return;
    }
    const newTodo: Todo = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setInput("");
  };

  const handleCheck = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to delete all todos?")) {
      setTodos([]);
    }
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="flex flex-col items-center mt-10 p-4">
      <h1 className="text-4xl md:text-7xl font-bold mb-6 text-center">
        Add Todos
      </h1>

      {/* Stats */}
      {todos.length > 0 && (
        <div className="mb-4 text-lg text-gray-600 dark:text-gray-400">
          {completedCount} of {totalCount} completed
        </div>
      )}

      {/* Input + Add button */}
      <form
        className="relative w-full max-w-96 mb-6"
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd();
        }}
      >
        <input
          type="text"
          className="w-full border-2 border-[#78c841] rounded-xl p-4 pr-24 focus:outline-none focus:border-green-600"
          placeholder="Enter your todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 rounded-lg text-white bg-green-500 hover:bg-green-600 transition-colors"
        >
          Add
        </button>
      </form>

      {/* Todo List */}
      <div className="w-full max-w-96 space-y-3 mb-6">
        {todos.length === 0 ? (
          <div className="text-center text-gray-500 dark:text-gray-400 py-8">
            {isLoaded ? "No todos yet. Add one above!" : "Loading..."}
          </div>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className={`flex justify-between items-center p-3 rounded-xl border-2 transition-all ${
                todo.completed
                  ? "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20"
                  : "border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
              }`}
            >
              <div className="flex items-center gap-3 flex-1">
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-[#78c841] cursor-pointer rounded"
                  checked={todo.completed}
                  onChange={() => handleCheck(todo.id)}
                />
                <span
                  className={`text-lg dark:text-white break-words flex-1 ${
                    todo.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {todo.text}
                </span>
              </div>
              <MdDelete
                size={20}
                className="cursor-pointer hover:scale-110 transition-transform text-red-500 hover:text-red-600 ml-2 flex-shrink-0"
                onClick={() => handleDelete(todo.id)}
              />
            </div>
          ))
        )}
      </div>

      {/* Clear All button */}
      {todos.length > 0 && (
        <button
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          onClick={handleClearAll}
        >
          Clear All ({todos.length})
        </button>
      )}
    </div>
  );
};

export default TodoList;

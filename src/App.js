
import TodoList from "./TodoList";

function App() {

  return(
    <>
      <TodoList />
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Complete Todos</button>
      <div>0 left todo</div>
    </>
  )
}

export default App;

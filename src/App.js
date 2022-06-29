import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import ChangeList from "./components/ChangeList";

function App() {
  const todolistReducer = useSelector((state) => state.todolistReducer);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 801px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <>
      {isDesktopOrLaptop && (
        <div
          className="App container-fluid d-flex justify-content-center border p-5 bg-dark text-white text-center"
          style={{ height: "1500px" }}>
          <div className="">
            <h3 className="">ToDo List with Redux Toolkit</h3>
            <TodoForm />
            <TodoList todolistReducer={todolistReducer} />
            <ChangeList />
          </div>
        </div>
      )}
      <>
        {isTabletOrMobile && (
          <div
            className="App container-fluid d-flex justify-content-center border p-5 bg-dark text-white text-center"
            style={{ height: "1000px" }}>
            <div className="">
              <h3 className="">ToDo List with Redux Toolkit</h3>
              <TodoForm />
              <TodoList todolistReducer={todolistReducer} />
              <ChangeList />
            </div>
          </div>
        )}
      </>
    </>
  );
}

export default App;

import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TasksList from "./components/TasksList";
import "./css/style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="board-app__main">
        <div className="board-app__inner">
          <AddTask />
          <section className="taskboard">
            <h2 className="visually-hidden">Ваши задачи:</h2>
            <TasksList />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;

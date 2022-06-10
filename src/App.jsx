import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TasksBoard from "./components/TasksBoard";
import "./css/style.css";
import { fetchTasks } from "./redux/actions";

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <main className="board-app__main">
        <div className="board-app__inner">
          <AddTask />
          <section className="taskboard">
            <h2 className="visually-hidden">Ваши задачи:</h2>
            <TasksBoard />
          </section>
        </div>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps)(App);

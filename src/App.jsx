import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TasksBoard from "./components/TasksBoard";
import "./css/style.css";
import { editTask, fetchTasks } from "./redux/actions";
import { DragDropContext } from "react-beautiful-dnd";
import { TASK_STATUS_NAMES } from "./data";

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const onDragEndHandler = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId !== destination.droppableId) {
      console.log("diferent column");
      dispatch(
        editTask(draggableId, {
          status: TASK_STATUS_NAMES[destination.droppableId],
          style: TASK_STATUS_NAMES[destination.droppableId].id,
        })
      );
      return;
    } else {
      //TODO reorder items in same column
      return;
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEndHandler}>
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
    </DragDropContext>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps)(App);

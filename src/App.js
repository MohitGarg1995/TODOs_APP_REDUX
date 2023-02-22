// import logo from './logo.svg';
import "./App.css";
import AddTodo from "./Component/AddTodo";
import ShowTodos from "./Component/ShowTodos";

function App() {
  return (
    <div className="Container bg-light vh-100">
      <div className="row">
        <div className="col-lg-12">
          <AddTodo />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <ShowTodos />
        </div>
      </div>
    </div>
  );
}

export default App;

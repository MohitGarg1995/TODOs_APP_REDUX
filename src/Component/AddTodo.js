import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/slice/addSlice";
// import { GrAdd } from "react-icons/gr";
import AddIcon from "@mui/icons-material/Add";
// import { reduxDataCheck } from "../Redux/reducers/auth";

function AddTodo() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const createTodo = () => {
    dispatch(addTodo(todo));
  };

  // const handleClick = () => {
  //   dispatch(reduxDataCheck({ name: "Hello Arokee" }));
  // };

  // const handleChange = (event) => {
  //   dispatch(setInputValue(event.target.value));
  // };

  return (
    <>
      <div className="row d-flex justify-content-around p-3">
        <div className="col-lg-8 d-flex">
          <input
            class="form-control form-control-lg"
            type="text"
            placeholder="Add your to do...."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            class="btn btn-light ms-4"
            type="submit"
            // onClick={() => console.log("Added item")}
            onClick={createTodo}
            style={{ width: "100px" }}
          >
            <AddIcon />
            {/* <GrAdd /> */}
          </button>
        </div>
      </div>
    </>
  );
}

export default AddTodo;

import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../Redux/slice/addSlice";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";

function ShowTodos() {
  // in the below line (state.todosSlice.todos)
  // state => represents application state
  // todoSlice => represents a particular Slice's collection of variables(for eg:- todos)
  // todos => represents variable name from the slice state
  // const todos = useSelector((state) => state.todosSlice.todos);
  const { todos } = useSelector((state) => state.todosSlice);
  console.log(" this is todopds", todos);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [updateVal, setUpdateVal] = useState("");
  const [index, setIndex] = useState("");

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleDeleteClick = (index) => {
    dispatch(deleteTodo(index));
  };

  const editValue = (index, value) => {
    setUpdateVal(value);
    setIndex(index);
    handleShow();
  };
  const update = () => {
    const payload = {
      index: index,
      updatedTodo: updateVal,
    };
    dispatch(updateTodo(payload));
    handleClose();
  };
  // const todos = [
  //   {
  //     id: 1,
  //     item: "Bring banana from store",
  //   },
  //   {
  //     id: 2,
  //     item: "Bring Soap from store",
  //   },
  //   {
  //     id: 3,
  //     item: "Bring Dhaniya from store",
  //   },
  //   {
  //     id: 4,
  //     item: "Go for temple",
  //   },
  //   {
  //     id: 5,
  //     item: "walking time is start",
  //   },
  //   {
  //     id: 6,
  //     item: "Bring powder from store",
  //   },
  //   {
  //     id: 7,
  //     item: "roaming with dog",
  //   },
  //   {
  //     id: 8,
  //     item: "metting with the new staff",
  //   },
  //   {
  //     id: 9,
  //     item: "zoom call time with client",
  //   },
  // ];
  return (
    <div className="row d-flex justify-content-around p-3">
      <div className="table-responsive col-lg-8 vh-75">
        <table className="table ">
          <thead>
            <tr>
              <th scope="col" style={{ width: "10%" }}>
                Sr no.
              </th>
              <th scope="col" style={{ width: "50%" }}>
                To Do's
              </th>
              <th scope="col" style={{ width: "10%" }}>
                Edit/Update
              </th>
              <th scope="col" style={{ width: "10%" }}>
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {todos?.map((todo, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{todo}</td>
                <td>
                  <button
                    className="btn btn-light"
                    onClick={() => editValue(index, todo)}
                  >
                    <GrEdit />
                    <span className="ms-2">EDIT</span>
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-dark"
                    onClick={() => handleDeleteClick(index)}
                  >
                    <RiDeleteBin5Line />
                    <span className="ps-0"> DELETE</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Upadate Todo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              class="form-control"
              value={updateVal}
              onChange={(e) => setUpdateVal(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={update}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default ShowTodos;

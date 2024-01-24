// src/components/TodoList.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  toggleIsDone,
  deleteTodo,
  FilterAll,
  NewSave,
} from "../redux/actions";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const [taskId, setTaskId] = useState();
  const todos = useSelector((state) => state.todos);
  const IsDoneValue = useSelector((state) => state.IsDoneValue);
  const dispatch = useDispatch();
  const [show, setNewshow] = useState(false);
  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };
  const [newTask, setnewTask] = useState("");

  const handleToggleIsDone = (id) => {
    dispatch(toggleIsDone(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleFilterAll = () => {
    dispatch(FilterAll("ALL"));
  };
  const handleFilterFav = () => {
    dispatch(FilterAll("Done"));
  };
  const handleEdit = (id) => {
    setTaskId(id);
    setNewshow(true);
  };
  const handlesave = (id) => {
    dispatch(NewSave({ newTask, id }));
    setNewshow(false);
  };

  return (
    <div className="todolist">
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="input"
        />
        <button onClick={handleAddTodo} placeholder="put yur task here">
          Add Todo
        </button>
        <button onClick={handleFilterFav}>DONE</button>
        <button onClick={handleFilterAll}>ALL</button>
      </div>
      <ul>
        {todos
          .filter((item) => {
            if (IsDoneValue === "ALL") return true;
            else if (IsDoneValue === "Done") return item.IsDone === true;
            else return false;
          })
          .map((todo) => (
            <li key={todo.id}>
              {show && todo.id === taskId ? (
                <form action="">
                  <input 
                    type="text"
                    onChange={(e) => setnewTask(e.target.value)}
                  />
                  <button onClick={() => handlesave(todo.id)}>save</button>
                </form>
              ) : (
                <div className="list">
                  <span
                    style={{ cursor: "pointer", marginRight: "8px" }}
                    onClick={() => handleToggleIsDone(todo.id)}
                  >
                    {todo.IsDone ? "★" : "☆"}
                  </span>
                  <h3> {todo.text}</h3>{" "}
                  <button onClick={() => handleDeleteTodo(todo.id)}>
                    Delete
                  </button>
                  <button onClick={() => handleEdit(todo.id)}>edit</button>
                </div>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodoList;

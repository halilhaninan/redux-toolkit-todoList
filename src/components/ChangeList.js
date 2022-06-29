import React from "react";
import { useDispatch } from "react-redux";
import { deleteCompleted, markAllCompleted } from "../features/todoSlice";

function ChangeList() {
  const dispatch = useDispatch();

  return (
    <div className="actions pt-3">
      <button
        className="btn btn-success mx-3"
        onClick={() => dispatch(markAllCompleted())}>
        Mark All Items Completed
      </button>
      <button
        className=" btn btn-warning  "
        onClick={() => dispatch(deleteCompleted())}>
        Delete Completed Items
      </button>
    </div>
  );
}

export default ChangeList;

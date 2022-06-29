import React from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import { markCompleted, markNotCompleted, remove } from "../features/todoSlice";
import "./todoList.css";

import {
  RiCheckboxCircleFill,
  RiCheckboxBlankCircleLine,
} from "react-icons/ri";
import { FiTrash2 } from "react-icons/fi";

const itemClassNames = (completed) => {
  console.log("itemClassNames", completed);

  classNames("item", {
    completed: completed,
  });
};

const TodoList = ({ todolistReducer }) => {
  const dispatch = useDispatch();

  const toggleCompleted = (id, completed) => {
    if (completed) dispatch(markNotCompleted(id));
    else dispatch(markCompleted(id));
  };
  const onDeleteTodo = (e, id) => {
    e.stopPropagation();
    dispatch(remove(id));
  };

  return (
    <div
      className="App container d-flex justify-content-center border"
      id="main">
      <ul className="list">
        {todolistReducer.map((todo) => {
          const { id, title, completed } = todo;
          return (
            <li
              id="todoList"
              key={id}
              className={itemClassNames(completed)}
              onClick={() => toggleCompleted(id, completed)}>
              {completed ? (
                <RiCheckboxCircleFill size="24" color="green" />
              ) : (
                <RiCheckboxBlankCircleLine size="24" color="gray" />
              )}
              <span>{title}</span>
              <FiTrash2
                className=""
                color="red"
                size="16"
                onClick={(e) => onDeleteTodo(e, id)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;

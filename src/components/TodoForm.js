import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../features/todoSlice";

const TodoForm = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const addAim = () => {
    if (title.length > 0) {
      dispatch(add(title));
      setTitle("");
    } else {
      alert("You must enter a title for your todo");
    }
  };

  return (
    <div className="container d-flex justify-content-center pt-4 pb-4">
      {isDesktopOrLaptop && (
        <input
          value={title}
          onChange={(event) => setTitle(event.currentTarget.value)}
          size="30"
          name="title"
          placeholder="What is your target?"></input>
      )}
      {isTabletOrMobile && (
        <input
          value={title}
          onChange={(event) => setTitle(event.currentTarget.value)}
          size="25"
          name="title"
          placeholder="What is your aim?"></input>
      )}
      <button onClick={addAim} type="button" className="btn btn-primary  ml-2">
        Send
      </button>
    </div>
  );
};

export default TodoForm;

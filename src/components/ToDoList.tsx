import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoSelector, toDoState } from "../atoms";
import ToDo from "./ToDo";
import { useEffect } from "react";
import SelectCategory from "./SelectCategory";

function ToDoList() {
  const [toDosList, setToDosList] = useRecoilState(toDoState);
  const toDos = useRecoilValue(toDoSelector);

  useEffect(() => {
    const savedToDos = localStorage.getItem("toDosList");
    if (savedToDos) {
      setToDosList(JSON.parse(savedToDos));
    }
  }, [setToDosList]);

  useEffect(() => {
    localStorage.setItem("toDosList", JSON.stringify(toDosList));
  }, [toDosList]);

  return (
    <div>
      <h1>To Do List</h1>
      <hr />
      <SelectCategory />
      <CreateToDo />
      {toDos?.map((aToDo) => (
        <ToDo key={aToDo.id} {...aToDo} />
      ))}
    </div>
  );
}

export default ToDoList;

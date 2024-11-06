import { atom, selector } from "recoil";

export enum Categories {
  "TO_DO" = "To_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

const savedToDos = localStorage.getItem("toDosList");
const parsedToDos = savedToDos ? JSON.parse(savedToDos) : [];

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: parsedToDos,
});

export const toDoSelector = selector({
  key: "toDoSelect",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});

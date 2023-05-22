import React, { useState } from "react";
type TodoItemType = {
  id: number;
  text: string;
  done: boolean;
};
const initialState: TodoItemType[] = [
  { id: 0, text: "", done: true },
  { id: 1, text: "", done: false },
];
const ToDoList = () => {
  const [listItems, setListItems] = useState<TodoItemType[]>(initialState);
  const [inputText, setInputText] = useState<string>("");
  const handleAdd = () => {
    const newListItem = {
      id: listItems.length + 1,
      text: inputText,
      done: false,
    };
    setListItems([...listItems, newListItem]);
    setInputText("");
  };
  return (
    <div className="ToDoList__body">
      <h1 className="ToDoList__header">To-Do List</h1>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="ToDoList__input__textbox"
        />
        <button onClick={() => handleAdd()} className="ToDoList__button">
          Add
        </button>
      </div>
      {listItems.length === 0 ? (
        <p className="ToDoList__message">
          <b>Nothing to do!</b>
        </p>
      ) : (
        <ul className="ToDoList__list">
          {listItems.map((todo) => (
            <li key={todo.id} className="ToDoList__list__item">
              <input
                type="checkbox"
                checked={todo.done}
                className="ToDoList__input__checkbox"
              />
              <span
                className="ToDoList__text"
                style={{ textDecoration: todo.done ? "line-through" : "none" }}
              >
                {todo.text}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default ToDoList;

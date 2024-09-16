import styled from "styled-components";
import React, { useState } from "react";
import TodoItem from "./TodoItem";
import CreateTodo from "./CreateTodo";
import "../style.css";

interface iTList {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState<iTList[]>([]);

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const inputValueCheck = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (inputValue.trim() === "") return;

    const newTodo: iTList = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodoList((prevList) => prevList.concat(newTodo));
    setInputValue("");
  };

  const toggleTodo = (id: number) => {
    setTodoList((prevList) =>
      prevList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id: number, newText: string) => {
    setTodoList((prevList) =>
      prevList.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodoList((prevList) => prevList.filter((todo) => todo.id !== id));
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CreateTodo
        onchange={onChangeInputValue}
        onsubmit={inputValueCheck}
        inputValue={inputValue}
      />
      <List_Ul>
        {todoList.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            text={item.text}
            completed={item.completed}
            onToggle={toggleTodo}
            onEdit={editTodo}
          />
        ))}
      </List_Ul>
    </div>
  );
}

const List_Ul = styled.ul`
  width: 550px;
  height: 550px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: auto;
`;

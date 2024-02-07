"use client";

import { BaseSyntheticEvent, memo } from "react";
import { ITodo } from "../../state/todo/todoSlice";
import { SORT_STATUS_TODO } from "../../state/sortBy/sortBySlice";
import { StatusText, TodoItemCSS } from "../../styled";

interface IProps {
  todo: ITodo;
  handleEdit?: (todo: ITodo) => void;
  handleDelete?: (todo: ITodo) => void;
  handleShowInfo?: (todo: ITodo) => void;
}

const TodoItem = ({
  todo,
  handleEdit,
  handleDelete,
  handleShowInfo,
}: IProps) => {

  const isDoneText = todo.isDone
    ? SORT_STATUS_TODO.COMPLETE
    : SORT_STATUS_TODO.PENDING;

  const onOpenInfoModal = (e: BaseSyntheticEvent) => {
    handleShowInfo && handleShowInfo(todo);
    e.stopPropagation();
  }

  const openDeleteModal = (e: BaseSyntheticEvent) => {
    handleDelete && handleDelete(todo);
    e.stopPropagation();
  };

  const openEditTodoModal = (e: BaseSyntheticEvent) => {
    handleEdit && handleEdit(todo);
    e.stopPropagation();
  };

  return (
    <TodoItemCSS onClick={onOpenInfoModal}>
      <div className="group-left">
        <StatusText $isDone={todo.isDone}>{isDoneText}</StatusText>
        <p>{todo.title}</p>
      </div>
      <div className="group-actions">
        <p onClick={openEditTodoModal}>📝</p>
        <p onClick={openDeleteModal}>✖️</p>
      </div>
    </TodoItemCSS>
  );
};

export default memo(TodoItem);

import { memo } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import Button from "../Unity/Button";
import { useAppModalContext } from "../../Context/ModalContext";
import { ITodo, todoActions } from "../../state/todo/todoSlice";
import { Title } from "../../styled";

interface IProps {
  todo: ITodo;
}

const DeleteTodoModal = ({ todo }: IProps) => {
  const { closeModal } = useAppModalContext();
  const dispatch = useDispatch();

  const cancel = () => {
    closeModal && closeModal();
  };

  const handleDeleteTodo = () => {
    dispatch(todoActions.deleteTodo(todo));
    toast.success("Delete successfully");
    closeModal && closeModal();
  };

  return (
    <InfoTodoModalCSS>
      <Title>Are you sure to delete ?</Title>
      <div className="wrapButton">
        <Button onClick={cancel}>Cancel</Button>
        <Button onClick={handleDeleteTodo} variant="danger">
          Delete
        </Button>
      </div>
    </InfoTodoModalCSS>
  );
};

export default memo(DeleteTodoModal);

const InfoTodoModalCSS = styled.div`
  max-width: 600px;
  padding: 0 24px;

  .wrapButton {
    display: flex;
    button {
      margin: 0 12px 24px;
    }
  }
`;

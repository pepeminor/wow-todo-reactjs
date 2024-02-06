import { memo } from "react";
import styled from "styled-components";
import { ITodo } from "../../state/todo/todoSlice";
import { StatusText, Title } from "../../styled";

interface IProps {
  todo: ITodo;
}

const InfoTodoModal = ({ todo }: IProps) => {
  const isDoneText = todo.isDone ? "complete" : "pending";

  return (
    <InfoTodoModalCSS $isDone={todo.isDone}>
      <Title>{todo.title}</Title>
      <DivTextCenter>
        <StatusText $isDone={todo.isDone}>{isDoneText}</StatusText>
      </DivTextCenter>

      <p className="desc">{todo.desc}</p>
    </InfoTodoModalCSS>
  );
};

export default memo(InfoTodoModal);

const InfoTodoModalCSS = styled.div<{
  $isDone?: boolean;
}>`
  max-width: 600px;
  padding: 0 24px;

  .desc {
    margin-bottom: 24px;
    margin-top: 24px;
  }

  input {
    background-color: white;
  }

  .status {
    margin-bottom: 12px;
    text-align: center;
    p {
      /* background-color: gray; */
      background-color: ${(props: any) => (props.$isDone ? "green" : "gray")};
      color: white;
      text-align: center;
      display: inline-block;
      padding: 4px 12px;
      border-radius: 18px;
    }
  }
`;

const DivTextCenter = styled.div`
  text-align: center;
`;

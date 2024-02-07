
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import NoData from "../NoData";
import { useCallback } from "react";
import CreateTodoModal from "../Modals/CreateTodoModal";
import { useAppModalContext } from "../../Context/ModalContext";
import { RootState } from "../../state/store";
import { SORT_STATUS_TODO, sortByActions } from "../../state/sortBy/sortBySlice";
import { ITodo } from "../../state/todo/todoSlice";
import TodoItem from "../TodoItem";

const ListTodoItem = () => {
  const { openModal } = useAppModalContext();
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todoReducer);
  const sortByReducer = useSelector((state: RootState) => state.sortByReducer);

  const isDone = sortByReducer === SORT_STATUS_TODO.COMPLETE;

  const sortItems = todos && todos.length && todos.filter((i: ITodo) => {
    if (sortByReducer === SORT_STATUS_TODO.ALL) return i;
    return i.isDone === isDone;
  });

  const sortByAll = () => {
    dispatch(sortByActions.changeSortBy(SORT_STATUS_TODO.ALL));
  };

  const openAddNewTodoModal = useCallback(() => {
    return (
      openModal &&
      openModal?.({
        title: "",
        style: {
          top: 120,
          background: "white",
          border: "1px solid #494747",
          color: "black",
        },
        body: <CreateTodoModal />,
      })
    );
  }, [openModal]);

  return (
    <WrapListItem>
      {sortItems && sortItems.length ? (
        sortItems.map((i: ITodo) => <TodoItem key={i.id} todo={i} />)
      ) : todos && todos.length ? (
        <WrapNoData>
          <NoData
            onClick={sortByAll}
            title={`No todo is ${sortByReducer}`}
            buttonText="Check All"
          />
        </WrapNoData>
      ) : (
        <WrapNoData>
          <NoData onClick={openAddNewTodoModal} buttonText="Create new Todo" />
        </WrapNoData>
      )}
    </WrapListItem>
  );
};

export default ListTodoItem;

const WrapListItem = styled.div`
  max-height: 84%;
  overflow-y: scroll;
  padding-bottom: 104px;
  display: flex;
  flex-direction: column-reverse;
`;

const WrapNoData = styled.div`
  width: 200px;
  padding-top: 34px;
  margin: auto;
`;

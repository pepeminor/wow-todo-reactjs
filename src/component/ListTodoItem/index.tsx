import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import NoData from "../NoData";
import { useCallback, useRef } from "react";
import CreateTodoModal from "../Modals/CreateTodoModal";
import { useAppModalContext } from "../../Context/ModalContext";
import { RootState } from "../../state/store";
import {
  SORT_STATUS_TODO,
  sortByActions,
} from "../../state/sortBy/sortBySlice";
import { ITodo, todoActions } from "../../state/todo/todoSlice";
import TodoItem from "../TodoItem";

const ListTodoItem = () => {
  const { openModal } = useAppModalContext();
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todoReducer);
  const sortByReducer = useSelector((state: RootState) => state.sortByReducer);

  const dragItem = useRef("");
  const draggedOverItem = useRef("");

  const isDone = sortByReducer === SORT_STATUS_TODO.COMPLETE;

  const sortItems =
    todos &&
    todos.length &&
    todos.filter((i: ITodo) => {
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

  function handleDragSort() {
    if (!sortItems || !todos) return;
    const cloneTodos = [...todos];

    const indexDragItem = cloneTodos.findIndex(
      (i) => i.id === dragItem.current,
    );
    const indexDraggedOverItem = cloneTodos.findIndex(
      (i) => i.id === draggedOverItem.current,
    );
    const temp = cloneTodos[indexDragItem];

    cloneTodos[indexDragItem] = cloneTodos[indexDraggedOverItem];
    cloneTodos[indexDraggedOverItem] = temp;

    dispatch(todoActions.updateAll(cloneTodos));
  }

  return (
    <WrapListItem>
      {sortItems && sortItems.length ? (
        sortItems.map((i: ITodo) => (
          <div
            key={i.id}
            draggable
            onDragStart={() => (dragItem.current = i.id)}
            onDragEnter={() => (draggedOverItem.current = i.id)}
            onDragEnd={handleDragSort}
            onDragOver={(e) => e.preventDefault()}
          >
            <TodoItem todo={i} />
          </div>
        ))
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

import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CreateTodoModal from "../Modals/CreateTodoModal";
import { useAppModalContext } from "../../Context/ModalContext";
import { RootState } from "../../state/store";
import useWindowSize from "../../hooks/useWindowSize";
import { SORT_STATUS_TODO, sortByActions } from "../../state/sortBy/sortBySlice";
import Button from "../Unity/Button";

const HeaderAction = () => {
  const { openModal } = useAppModalContext();
  const dispatch = useDispatch();
  const sortBy = useSelector((state: RootState) => state.sortByReducer);

  const { width } = useWindowSize();
  const isMobile = width < 769;

  const openAddNewTodoModal = useCallback(() => {
    console.log('aloooo')
    return (
      openModal &&
      openModal?.({
        title: "",
        style: {
          top: isMobile ? 0 : 150,
          background: "white",
          border: "1px solid #494747",
          color: "black",
        },
        body: <CreateTodoModal />,
      })
    );
  }, [openModal, isMobile]);

  const handleSelectStatus = (e: any) => {
    dispatch(sortByActions.changeSortBy(e.target.value));
  };

  return (
    <FormSelect>
      <div>
        <label className="label" htmlFor="status">
          Sort by:
        </label>
        <select
          onChange={handleSelectStatus}
          name="status"
          id="status"
          value={sortBy}
        >
          <option value={`${SORT_STATUS_TODO.ALL}`}>
            {SORT_STATUS_TODO.ALL}
          </option>
          <option value={`${SORT_STATUS_TODO.PENDING}`}>
            {SORT_STATUS_TODO.PENDING}
          </option>
          <option value={`${SORT_STATUS_TODO.COMPLETE}`}>
            {SORT_STATUS_TODO.COMPLETE}
          </option>
        </select>
      </div>
      <ButtonAddTodo variant="ghost" onClick={openAddNewTodoModal}>
        Add Todo
      </ButtonAddTodo>
    </FormSelect>
  );
};

export default HeaderAction;

const ButtonAddTodo = styled(Button)`
  width: 140px;
  @media (max-width: 500px) {
    width: auto;
    font-size: 12px;
  }
`;

const FormSelect = styled.div`
  padding: 12px 24px 12px;
  background-color: #c5b9aa;
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  color: white;

  select {
    border: 0;
    color: black;
    border-radius: 8;
    margin-left: 12px;
    text-transform: capitalize;
  }

  @media (max-width: 500px) {
    padding: 12px;
    select {
      width: 100px;
    }
    .label {
      display: none;
      margin-left: 0;
    }
  }
`;

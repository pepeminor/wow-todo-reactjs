import useWindowSize from "./useWindowSize";
import InfoTodoModal from "../component/Modals/InfoTodoModal";
import EditTodoModal from "../component/Modals/EditTodoModal";
import DeleteTodoModal from "../component/Modals/DeleteTodoModal";
import { ITodo } from "../state/todo/todoSlice";
import { useAppModalContext } from "../Context/ModalContext";

const useOpenModals = () => {
  const { openModal } = useAppModalContext();
  const { width } = useWindowSize();
  const isMobile = width < 769;

  const openInfoTodoModal = (todo: ITodo) => {
    return (
      openModal &&
      openModal?.({
        title: "Todo Detail",
        style: {
          top: isMobile ? 40 : 150,
          background: "white",
          border: "1px solid #494747",
          color: "black",
        },
        body: <InfoTodoModal todo={todo} />,
      })
    );
  };

  const openEditTodoModal = (todo: ITodo) => {
    return (
      openModal &&
      openModal?.({
        style: {
          top: isMobile ? 20 : 100,
          background: "white",
          border: "1px solid #494747",
          color: "black",
          height: "auto",
        },
        body: <EditTodoModal todo={todo} />,
      })
    );
  };

  const openDeleteModal = (todo: ITodo) => {
    return (
      openModal &&
      openModal?.({
        style: {
          top: isMobile ? 0 : 150,
          background: "white",
          border: "1px solid #494747",
          color: "black",
          height: "auto",
        },
        body: <DeleteTodoModal todo={todo} />,
      })
    );
  };

  return {
    openDeleteModal,
    openEditTodoModal,
    openInfoTodoModal,
  };
};

export default useOpenModals;

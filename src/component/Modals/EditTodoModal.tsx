import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useAppModalContext } from "../../Context/ModalContext";
import { ITodo, todoActions } from "../../state/todo/todoSlice";
import { CustomButton, CustomDiv, Title, WrapBody } from "../../styled";

const TITLE_LIMIT = 5;
const DESC_LIMIT = 10;

interface IProps {
  todo: ITodo;
}

const EditTodoModal = ({ todo }: IProps) => {
  const dispatch = useDispatch();
  const { closeModal } = useAppModalContext();

  const [input, setInput] = useState({
    title: todo.title,
    desc: todo.desc,
    isDone: todo.isDone,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleMarkIsDone = () => {
    setInput((prev) => ({
      ...prev,
      isDone: !prev.isDone,
    }));
  };

  const onClickMarkDone = (e: React.ChangeEvent<any>) => {
    e.stopPropagation();
    toggleMarkIsDone();
  };
  const error = useMemo(() => {
    const isErrorTitle =
      input.title.length < TITLE_LIMIT && input.title.length > 0
        ? `* Input title must have ${TITLE_LIMIT} characters or more`
        : "";
    const isErrorDesc =
      input.desc.length < DESC_LIMIT && input.desc.length > 0
        ? `* Input descriptions must have ${TITLE_LIMIT} characters or more`
        : "";

    return {
      title: isErrorTitle,
      desc: isErrorDesc,
    };
  }, [input.title, input.desc]);

  const isDisable = useMemo(() => {
    if (input.title.length < TITLE_LIMIT) return true;
    if (input.desc.length < DESC_LIMIT) return true;
    return false;
  }, [input.desc, input.title]);

  const handleEditTodo = () => {
    dispatch(
      todoActions.editTodo({
        id: todo.id,
        title: input.title,
        desc: input.desc,
        isDone: input.isDone,
      }),
    );
    toast.success("Update successfully");
    closeModal && closeModal();
  };

  return (
    <WrapBody>
      <Title>Edit Wow Todo</Title>
      <CustomDiv>
        <p>Title:</p>
        <div className="wrapInput">
          <input
            value={input.title}
            onChange={handleChange}
            name="title"
            placeholder="Enter title..."
          />
          <span className="error error1">{error.title}</span>
        </div>
      </CustomDiv>
      <CustomDiv
        style={{
          alignItems: "flex-start",
        }}
      >
        <p>Descriptions:</p>
        <div className="wrapInput">
          <textarea
            value={input.desc}
            onChange={handleChange}
            name="desc"
            placeholder="Enter descriptions..."
          />
          <span className="error">{error.desc}</span>
        </div>
      </CustomDiv>
      <CustomDiv
        style={{
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={toggleMarkIsDone}
      >
        <input
          className="checkbox"
          checked={input.isDone}
          onClick={onClickMarkDone}
          type="checkbox"
        />
        Mark is Done
      </CustomDiv>
      <CustomButton onClick={handleEditTodo} disabled={isDisable}>
        Confirm
      </CustomButton>
    </WrapBody>
  );
};

export default EditTodoModal;

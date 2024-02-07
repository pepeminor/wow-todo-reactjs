import { memo, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
// import { CustomButton, CustomDiv, Title, WrapBody } from "@/app/styled";
// import { todoActions } from "@/state/todo/todoSlice";
// import { useAppModalContext } from "@/Context/ModalContext";
import { toast } from "react-toastify";
import { useAppModalContext } from "../../Context/ModalContext";
import { todoActions } from "../../state/todo/todoSlice";
import { CustomButton, CustomDiv, Title, WrapBody } from "../../styled";

const TITLE_LIMIT = 5;
const DESC_LIMIT = 10;

const CreateTodoModal = () => {
  const dispatch = useDispatch();
  const { closeModal } = useAppModalContext();

  const [input, setInput] = useState({
    title: "",
    desc: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const error = useMemo(() => {
    const isErrorTitle =
      input.title.length < TITLE_LIMIT && input.title.length > 0
        ? `* Input title must have ${TITLE_LIMIT} characters or more`
        : "";
    const isErrorDesc =
      input.desc.length < DESC_LIMIT && input.desc.length > 0
        ? `* Input descriptions must have ${DESC_LIMIT} characters or more`
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

  const handleCreateTodo = () => {
    dispatch(
      todoActions.addNewTodo({
        id: uuid(),
        title: input.title,
        desc: input.desc,
        isDone: false,
      })
    );
    toast.success("Create successfully");
    closeModal && closeModal();
  };

  return (
    <WrapBody>
      <Title>Create Wow Todo</Title>
      <CustomDiv>
        <p>Title:</p>
        <div className="wrapInput">
          <input
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
            onChange={handleChange}
            name="desc"
            placeholder="Enter descriptions..."
          />
          <span className="error">{error.desc}</span>
        </div>
      </CustomDiv>
      <CustomButton onClick={handleCreateTodo} disabled={isDisable}>
        Create
      </CustomButton>
    </WrapBody>
  );
};

export default memo(CreateTodoModal);

import { memo } from "react";
import { FaFile } from "react-icons/fa";
import Button from "../Unity/Button";

const NoData = ({
  title = "No Todo",
  buttonText = "Create Todo Now",
  isShowButtonAction = true,
  onClick,
}: {
  title?: string;
  buttonText?: string;
  isShowButtonAction?: boolean;
  onClick?: () => void;
}) => {
  return (
    <div className="mx-auto">
      <p className="mb-4 flex justify-center text-center text-[64px]">
        <FaFile color="grey" />
      </p>
      <h3 className="mb-4 text-center text-[20px] font-bold">{title}</h3>
      {isShowButtonAction && (
        <div className="flex justify-center">
          <Button onClick={onClick}>
            <span className="px-2">{buttonText}</span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default memo(NoData);

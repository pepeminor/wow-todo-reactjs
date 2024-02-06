// import Button from "@/components/Unity/Button";
import styled from "styled-components";
import Button from "./component/Unity/Button";

export const Wrapper = styled.div`
  position: relative;
  height: 100dvh;
  overflow: hidden;
  background-color: #c5b9aa;
  color: #000;
  /* background-image: linear-gradient(
    90deg,
    #ff3cdf 0,
    #c799ff 16.66%,
    #2828f4 33.33%,
    #ff3cdf 50%,
    #c799ff 66.66%,
    #2828f4 83.33%,
    #ff3cdf 100%
  ); */
`;

export const Container = styled.div`
  border-radius: 12px;
  width: 80%;
  max-width: 1020px;
  position: absolute;
  margin: 20px;
  left: 50%;
  top: 50%;
  margin: auto;
  transform: translate(-50%, -50%);
  height: 84%;
  background-color: aliceblue;
  overflow: hidden;

  @media (max-width: 475px) {
    width: 90%;
    height: 95%;
  }
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 32px;
  padding: 16px;
  font-weight: bold;

  .todo {
    position: relative;
    font-size: 30px;
    text-transform: capitalize;
    color: black;
    overflow: hidden;
    -webkit-text-stroke: 1px transparent;
    transition: 0.8s all;
  }

  .wow {
    position: relative;
    font-size: 30px;
    text-transform: capitalize;
    -webkit-text-stroke: 1px black;
    color: transparent;
    transition: 0.4s all;
  }
  .wow::before {
    content: attr(data-fill-text);
    background: linear-gradient(
      90deg,
      #ff3cdf 0,
      #c799ff 16.66%,
      #2828f4 33.33%,
      #ff3cdf 50%,
      #c799ff 66.66%,
      #2828f4 83.33%,
      #ff3cdf 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    white-space: nowrap;
    position: absolute;
    top: -5px;
    left: 0;
    width: -1%;
    transform: scale(0);
    transition: 0.4s all;
    overflow: hidden;
  }

  &:hover {
    cursor: pointer;
    .wow {
      color: white;
      -webkit-text-stroke: 1px transparent;
    }
    .wow::before {
      transform: scale(1);
      width: 100%;
    }

    .todo {
      color: #c5b9aa;
      -webkit-text-stroke: 1px #c5b9aa;
    }
  }

  .wow:hover::before {
    width: 100%;
  }
`;

export const TodoItemCSS = styled.div`
  padding: 8px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin: 12px 0 24px;
  transition: 0.4s all;
  cursor: move;

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 1px;
    background-color: black;
  }

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 1px solid gray;
    border-radius: 4px;
    width: 20px;
    height: 20px;
  }
  p {
    overflow: hidden;

    margin-left: 18px;
  }

  .group-left {
    p {
      width: 100px;
      text-overflow: ellipsis;
    }
    display: flex;
    align-items: center;
  }
  .group-actions {
    opacity: 0;
    visibility: hidden;
    font-size: 24px;
    display: flex;
    align-items: center;
    transition: 0.4s all;
    p {
      cursor: pointer;
      padding: 4px;
    }
  }

  &:hover {
    .group-actions {
      opacity: 1;
      visibility: visible;
    }
  }

  @media (max-width: 1024px) {
    .group-left {
      width: 100%;
    }
    .group-actions {
      opacity: 1;
      visibility: visible;
    }
  }

  @media (max-width: 420px) {
    flex-direction: column;
    .group-actions {
      padding-top: 12px;
      justify-content: flex-end;
      width: 100%;
    }
  }
`;

export const StatusText = styled.div<{
  $isDone?: boolean;
}>`
  /* margin-bottom: 12px; */
  width: 90px;
  text-align: center;
  background-color: ${(props: any) => (props.$isDone ? "green" : "gray")};
  color: white;
  text-align: center;
  display: inline-block;
  padding: 4px 12px;
  border-radius: 18px;
`;

export const CustomButton = styled<any>(Button)`
  margin: 24px 0;
`;

export const WrapBody = styled.div`
  display: flex;
  padding: 0 24px;
  flex-direction: column;
`;

export const CustomDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0 18px;
  p {
    word-break: break-all;
    width: 120px;
    margin-right: 12px;
  }
  .wrapInput {
    width: 100%;
    position: relative;
    .error {
      position: absolute;
      bottom: -24px;
      left: 0;
      font-size: 12px;
      color: red;
    }
  }
  input {
    width: 100%;
    background-color: #ebebeb;
    border-radius: 8px;
    padding: 4px 12px;
  }
  input.checkbox {
    width: 24px;
    height: 24px;
    border-radius: 2px;
    margin-right: 12px;
    padding: 4px;
  }
  textarea {
    width: 100%;
    background-color: #ebebeb;
    border-radius: 8px;
    padding: 4px 12px;
    min-height: 100px;
    border: none;
    vertical-align: text-top;
  }

  @media (max-width: 500px) {
    .wrapInput {
      .error.error1 {
        bottom: -18px;
      }
      .error {
        bottom: -32px;
        width: 100%;
        font-size: 10px;
      }
    }
  }
  @media (max-width: 380px) {
    .wrapInput {
      .error.error1 {
        bottom: -31px;
      }
    }
  }
`;

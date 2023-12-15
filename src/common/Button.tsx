import styled from "styled-components";

interface BtnType {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
  color?: string;
  eventHandler?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
// type, text, eventHandler를 받는 버튼 컴포넌트

export default function Button({ type, text, color, eventHandler }: BtnType) {
  return (
    <BtnWrapper color={color}>
      <button type={type} onClick={eventHandler}>
        {text}
      </button>
    </BtnWrapper>
  );
}

const BtnWrapper = styled.div<{ color?: string }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & button {
    cursor: pointer;
    font-size: 17px;
    font-weight: 900;
    user-select: none;
    width: 80px;
    height: 30px;
    background-color: transparent;
    border-radius: 10px;
    /* color: ${(props) => props.color || "black"}; */
    color: ${(props) => props.color || "black"};
    border: ${(props) =>
      props.color ? `2px solid ${props.color}` : "2px solid black"};

    &:hover {
      background-color: ${(props) => props.color || "black"};
      color: white;
    }
  }
`;

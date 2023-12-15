import styled from "styled-components";

const AddFormSection = styled.form`
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: bisque;
  & h1 {
    font-size: 25px;
    font-weight: 500;
  }
`;

const TitleAndInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 700px;
  font-size: 20px;
  gap: 15px;

  & input {
    border: none;
    height: 20px;
    font-size: 17px;
    outline: none;
    padding: 12px 5px;
  }
`;

export { AddFormSection, TitleAndInput, InputWrapper };

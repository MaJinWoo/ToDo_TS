import styled from "styled-components";

const TodosListSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  gap: 30px;
  & h1 {
    font-size: 25px;
    font-weight: 600;
    padding: 20px;
  }
`;

const TodoCardSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 30px;
`;

const TodoCard = styled.ul`
  border: 1px solid white;
  border-radius: 15px;
  height: 150px;
  width: 350px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 20px;
  background-color: lightyellow;
  & h2 {
    font-weight: 600;
    font-size: 20px;
  }
`;

const BtnWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  gap: 5px;
`;

export { TodosListSection, TodoCardSection, TodoCard, BtnWrapper };

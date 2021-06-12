import styled from "styled-components";

export const StyledComponents = () => {
  //人気上位のライブラリ
  return (
    <SContainer>
      <STitle>- StyledComponents -</STitle>
      <SButton>fight!!</SButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: solid 2px #392e;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitle = styled.p`
  margin: 0;
  color: #3d84a8;
`;

const SButton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #464646;
    color: #fff;
    cursor: pointer;
  }
`;
//styled-componentsならhoverもいける

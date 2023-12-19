import styled from "styled-components";

const HeaderWrap = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  border-bottom: 0.1rem solid #f1f1f1;
  background-color: #fff;
  box-shadow: 0 0 2rem 0 #e2e6ee;
`;
const HeaderTitle = styled.h1`
  font-size: 2.6rem;
`;

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderTitle>나는 누구의 집사가 될까?</HeaderTitle>
    </HeaderWrap>
  );
};

export default Header;

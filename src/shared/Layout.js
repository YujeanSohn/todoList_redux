import React from "react";
import styled from "styled-components";

const Bg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  min-width: 800px;
`;

const Header = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: cornflowerblue;
  font-weight: 800;
`;

function Layout({ children }) {
  return (
    <Bg>
      <Wrapper>
        <Header>
          <div>🎯 TodoList</div>
          <div>React & Redux & styled-component</div>
        </Header>
        {children}
      </Wrapper>
    </Bg>
  );
}

export default Layout;

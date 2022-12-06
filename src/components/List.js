import React from "react";
import Todo from "./Todo";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  ::after {
    display: block;
    content: "";
    clear: both;
  }
`;

function List({ todos }) {
  return (
    <Wrapper>
      {todos.length !== 0
        ? todos.map((todo) => <Todo key={todo.id} todo={todo} />)
        : "추가된 내용이 없습니다."}
    </Wrapper>
  );
}

export default List;

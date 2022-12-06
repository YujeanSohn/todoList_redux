import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Input from "../components/Input";
import List from "../components/List";

const Wrapper = styled.div`
  width: 100%;
`;

const Content = styled.div`
  padding: 20px;
`;

const ContentTitle = styled.h1`
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
`;

function TodoList() {
  const todos = useSelector((state) => state.todosReducer.todos);

  return (
    <Wrapper>
      <>
        <Input />
      </>
      <Content>
        <ContentTitle>Working 🏃‍♀</ContentTitle>
        <List todos={todos?.filter((todo) => todo.isWorking === true)} />
        <ContentTitle>Done 🧙‍♂</ContentTitle>
        <List todos={todos?.filter((todo) => todo.isWorking === false)} />
      </Content>
    </Wrapper>
  );
}

export default TodoList;

// import React, { useEffect, useRef, useState } from "react";
import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { deleteTodo, updateTodo } from "../redux/modules/todos";

const Wrapper = styled.div`
  width: 25%;
  height: 300px;
  padding: 20px;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${(props) => props.gap};
  align-items: stretch;
  border-radius: 50px;
  border: 2px solid cornflowerblue;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

const TitleBox = styled.p`
  width: 100%;
  line-height: 30px;
  font-size: 30px;
  font-weight: 800;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TextBox = styled.p`
  width: 100%;
  line-height: 30px;
  font-size: 20px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  width: 45%;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  border: 2px solid ${(props) => props.color};
  color: ${(props) => props.color};
  text-align: center;
  :hover {
    cursor: pointer;
  }
`;

function Todo({ todo }) {
  let wrapperRef = useRef();
  let firstChildRef = useRef();
  let secondChildRef = useRef();
  const [gap, setGap] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const padding =
      Number(
        window.getComputedStyle(wrapperRef.current).padding.replace("px", "")
      ) * 3;
    let totalGap =
      wrapperRef.current.offsetHeight -
      padding -
      firstChildRef.current.offsetHeight -
      secondChildRef.current.offsetHeight;
    setGap(String(totalGap));
  }, [wrapperRef, firstChildRef, secondChildRef, gap]);

  const handleUpdateTodo = (id, state) => {
    dispatch(updateTodo({ id, state }));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <Wrapper ref={wrapperRef} gap={`${gap}px`}>
      <div ref={firstChildRef}>
        <TitleBox>
          {todo.title}
          <Link to={`/todo/${todo.id}`} style={{ fontSize: "16px" }}>
            상세보기
          </Link>
        </TitleBox>
        <TextBox>
          {todo.todo.length > 50
            ? todo.todo.slice(0, 51).concat("...")
            : todo.todo}
        </TextBox>
      </div>
      <ButtonWrapper ref={secondChildRef}>
        <Button
          onClick={() => handleUpdateTodo(todo.id)}
          color={todo.isWorking ? "cornflowerblue" : "orange"}
        >
          {todo.isWorking ? "완료하기" : "취소하기"}
        </Button>
        <Button onClick={() => handleDeleteTodo(todo.id)} color="red">
          삭제하기
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default Todo;

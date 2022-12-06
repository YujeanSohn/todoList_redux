import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 300px;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${(props) => props.gap};
  align-items: stretch;
  border-radius: 50px;
  border: 2px solid cornflowerblue;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TitleBox = styled.p`
  width: 100%;
  line-height: 30px;
  font-size: 30px;
  font-weight: 800;
`;

const TextBox = styled.p`
  width: 100%;
  line-height: 30px;
  font-size: 20px;
`;

const StateBox = styled.p`
  width: 100%;
  text-align: end;
`;

function Detail() {
  const params = useParams();
  const todos = useSelector((state) => state.todosReducer.todos);
  const todo = todos.find((todo) => todo.id === parseInt(params.id));
  let wrapperRef = useRef();
  let firstChildRef = useRef();
  let secondChildRef = useRef();
  const [gap, setGap] = useState("");

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

  return (
    <Wrapper ref={wrapperRef} gap={`${gap}px`}>
      <Header ref={firstChildRef}>
        <InfoBox>
          <div>TODO ID: {todo?.id}</div>
          <Link to="/">이전으로</Link>
        </InfoBox>
        <TitleBox>{todo?.title}</TitleBox>
      </Header>
      <div ref={secondChildRef}>
        <TextBox>{todo?.todo}</TextBox>
        <StateBox>
          {todo?.isWorking ? "아직 진행중입니다.🔥" : "완료된 일입니다.🦸‍♀"}
        </StateBox>
      </div>
    </Wrapper>
  );
}

export default Detail;

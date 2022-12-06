import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createTodo } from "../redux/modules/todos";

const Wrapper = styled.div`
  padding: 20px;
  border-radius: 15px;
  background-color: #ccc;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const InputBox = styled.input`
  width: 300px;
  height: 60px;
  margin-right: 20px;
  border-radius: 15px;
  text-indent: 15px;
`;

const Button = styled.button`
  width: 300px;
  height: 60px;
  border: none;
  border-radius: 15px;
  background-color: cornflowerblue;
  :hover {
    cursor: pointer;
  }
`;

const Input = () => {
  const ref = useRef();
  const [id, setID] = useState(0);
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleChangeTitle = ({ target: { value } }) => {
    setTitle(value);
  };
  const handleChangeTodo = ({ target: { value } }) => {
    setTodo(value);
  };

  const handleAddTodo = () => {
    if (title.length === 0 || todo.length === 0) {
      alert("내용을 작성해주세요");
      return;
    }
    setID(id + 1);

    dispatch(createTodo({ id: id, title: title, todo: todo, isWorking: true }));

    setTitle("");
    setTodo("");
    ref.current.focus();
  };

  return (
    <Wrapper>
      <Content>
        <div>
          <InputBox
            ref={ref}
            value={title}
            onChange={handleChangeTitle}
            type="text"
            placeholder="제목을 작성해주세요."
          />
          <InputBox
            value={todo}
            onChange={handleChangeTodo}
            type="text"
            placeholder="할 일을 작성해주세요."
          />
        </div>
        <Button onClick={handleAddTodo}>추가하기</Button>
      </Content>
    </Wrapper>
  );
};

export default Input;

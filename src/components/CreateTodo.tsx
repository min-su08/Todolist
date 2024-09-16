import React from "react";
import styled from "styled-components";

interface CreateTodoProps {
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onsubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  inputValue: string;
}
const CreateTodo: React.FC<CreateTodoProps> = ({
  onchange,
  onsubmit,
  inputValue,
}) => {
  return (
    <Header_Field>
      <Title>TodoList</Title>
      <Contain_Evnt onSubmit={onsubmit}>
        <Input_Field
          type="text"
          value={inputValue}
          onChange={onchange}
          placeholder="할 일을 입력하세요!"
        />
        <Add_Button type="submit">+</Add_Button>
      </Contain_Evnt>
    </Header_Field>
  );
};

const Contain_Evnt = styled.form`
  width: 600px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input_Field = styled.input`
  margin-top: 10px;
  width: 255px;
  height: 30px;

  border-radius: 5px;
  border-style: none;

  background-color: #12daf1;
  box-shadow: 3px 3px 10px blue;
  padding-left: 10px;

  &::placeholder {
    color: #1c2651;
  }
`;

const Add_Button = styled.button`
  margin-top: 10px;
  margin-left: 5px;
  width: 45px;
  height: 35px;

  border-radius: 5px;
  border-style: none;

  background-color: #3cf209;
  box-shadow: 3px 3px 10px blue;

  font-size: 1.2em;
  font-weight: 600;

  &:hover {
    background-color: #42c142;
  }
`;

const Header_Field = styled.div`
  width: 600px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const Title = styled.h1`
  font-size: 1.7em;
  font-weight: 600;
`;

export default CreateTodo;

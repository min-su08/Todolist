import styled from "styled-components";

export default function TodoInput() {
  return (
    <>
      <Input_Field placeholder="할 일을 입력하세요!"></Input_Field>
    </>
  );
}

const Input_Field = styled.input`
  margin-top: 20px;
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

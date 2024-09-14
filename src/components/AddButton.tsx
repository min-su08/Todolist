import styled from "styled-components";

export default function AddButton() {
  return (
    <>
      <Add_Button>+</Add_Button>
    </>
  );
}

const Add_Button = styled.button`
  margin-top: 20px;
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

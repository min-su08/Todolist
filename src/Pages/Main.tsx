import styled from "styled-components";
import TodoList_List from "../components/TodoList_List";
import TodoInput from "../components/TodoInput";
import AddButton from "../components/AddButton";

export default function Main() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
      <Header_Field>
        <Title>TodoList</Title>
        <Contain_Evnt>
          <TodoInput />
          <AddButton />
        </Contain_Evnt>
      </Header_Field>
      <TodoList_List />
    </div>
  );
}

const Contain_Evnt = styled.div`
  width: 600px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header_Field = styled.div`
  width: 600px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.7em;
  font-weight: 600;
`;

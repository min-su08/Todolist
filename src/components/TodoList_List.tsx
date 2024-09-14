import styled from "styled-components";
import "../style.css";

export default function TodoList_List() {
  return <List_Ul></List_Ul>;
}

const List_Ul = styled.ul`
  width: 550px;
  height: 550px;
  background-color: yellow;
  border-radius: 10px;
`;

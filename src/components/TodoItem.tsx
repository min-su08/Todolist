import { useState } from "react";
import "../css/TodoItem.css";

interface iTodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void; // 완료 상태 변경 함수
  onEdit: (id: number, newText: string) => void; // 수정 함수
}

export default function TodoItem({
  id,
  text,
  completed,
  onToggle,
  onEdit,
}: iTodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleEdit = () => {
    if (newText.trim() === "") {
      alert("수정할 텍스트를 입력하세요.");
      return;
    }
    onEdit(id, newText);
    setIsEditing(false);
  };

  return (
    <li className="todoContainer">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleEdit}>확인</button>
        </>
      ) : (
        <p>{text}</p>
      )}
      <div className="btn_container">
        <button id="btn" onClick={() => setIsEditing(!isEditing)}>
          edit
        </button>
        <button id="btn">del</button>
        <button id="finish" onClick={() => onToggle(id)}>
          {completed ? "완료됨" : "완료하기"}
        </button>
      </div>
    </li>
  );
}

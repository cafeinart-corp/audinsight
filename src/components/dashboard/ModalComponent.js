import React, { useState } from "react";

function ModalComponent({ isOpen, onClose }) {
  const [dragging, setDragging] = useState(false);
  const [initialY, setInitialY] = useState(0);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const handleMouseDown = (e) => {
    setDragging(true);
    setInitialY(e.clientY);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const deltaY = e.clientY - initialY;

      // 모달의 위치 업데이트
      setModalPosition((prevPosition) => ({
        ...prevPosition,
        top: Math.min(
          Math.max(0, prevPosition.top + deltaY),
          window.innerHeight * 0.7 - modalHeight
        ),
      }));

      setInitialY(e.clientY);
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const modalStyle = {
    // 모달의 위치를 스타일로 설정
    top: `${modalPosition.top}px`,
    left: `${modalPosition.left}px`,
  };

  const modalHeight = 300; // 모달의 높이를 조절하세요.

  return (
    <div>
      {/* 모달 */}
      {isOpen && (
        <div
          className="modal"
          style={modalStyle} // 모달의 위치 스타일 적용
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <div className="modal-content">
            <h2>모달 내용</h2>
            <p>이 곳에 모달의 내용을 추가합니다.</p>
            <button onClick={onClose}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalComponent;

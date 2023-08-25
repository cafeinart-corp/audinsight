import React, { useState } from "react";

function ModalComponent({ isOpen, onClose }) {
  const [dragging, setDragging] = useState(false);
  const [initialY, setInitialY] = useState(0);

  const handleMouseDown = (e) => {
    setDragging(true);
    setInitialY(e.clientY);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const deltaY = e.clientY - initialY;
      const modal = document.querySelector(".modal");
      const modalHeight = modal.clientHeight;
      const windowHeight = window.innerHeight;
      const newTop = Math.min(
        Math.max(0, modal.offsetTop + deltaY),
        windowHeight * 0.7 - modalHeight
      );
      modal.style.top = newTop + "px";
      setInitialY(e.clientY);
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div>
      {/* 모달 */}
      {isOpen && (
        <div
          className="modal"
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

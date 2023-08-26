import React, { useState, useEffect } from "react";
import "./Modal.css"; // 모달 스타일을 설정할 CSS 파일

function Modal({ isOpen, onClose }) {
  const [dragging, setDragging] = useState(false);
  const [startY, setStartY] = useState(0);

  const handleMouseDown = (e) => {
    setDragging(true);
    setStartY(e.clientY);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const modal = document.getElementById("modal-container");
      const deltaY = e.clientY - startY;
      const newTop = parseInt(modal.style.top || 0, 10) + deltaY;

      // 모달이 화면 아래쪽으로 벗어나지 않도록 조절
      const windowHeight = window.innerHeight;
      const modalHeight = modal.getBoundingClientRect().height;
      if (newTop + modalHeight <= windowHeight) {
        modal.style.top = newTop + "px";
        setStartY(e.clientY);
      } else {
        // 아래로 드래그할 때 모달이 닫히도록 처리
        onClose();
      }
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const closeModal = () => {
    console.log("closeModal");
    onClose(); // 모달을 닫는 함수 호출
  };

  return (
    <div
      id="modal-container"
      className={`modal-container ${dragging ? "dragging" : ""} ${
        isOpen ? "open" : ""
      }`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="modal-header">
        모달 헤더
        <button className="close-button" onClick={onClose}>
          닫기
        </button>
      </div>
      <div className="modal-content">
        {/* 모달 내용 */}
        <p>모달 내용을 입력하세요.</p>
        {/* 모달 내부 버튼 */}
        <button onClick={onClose}>모달 닫기</button>
      </div>
    </div>
  );
}

export default Modal;

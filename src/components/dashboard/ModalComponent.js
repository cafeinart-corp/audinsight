import React, { useState, useRef } from "react";
import "./ModalComponent.css";

function ModalComponent({ isOpen, onClose }) {
  const [dragging, setDragging] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const modalRef = useRef(null);

  const modalHeight = 300; // Adjust the modal height as needed
  const closeThreshold = window.innerHeight * 0.9 - modalHeight;
  const animationDuration = 300; // Adjust the animation duration in milliseconds

  const handleMouseDown = (e) => {
    setDragging(true);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const top = e.clientY;
      setModalPosition({ top, left: modalPosition.left });
    }
  };

  const closeModalSmoothly = () => {
    const startTime = performance.now();
    const startTop = modalPosition.top;

    function animateModal(time) {
      const elapsedTime = time - startTime;
      if (elapsedTime < animationDuration) {
        const newTop =
          startTop +
          (closeThreshold - startTop) * (elapsedTime / animationDuration);
        setModalPosition({ top: newTop, left: modalPosition.left });
        requestAnimationFrame(animateModal);
      } else {
        setModalPosition({ top: closeThreshold, left: modalPosition.left });
        onClose();
      }
    }

    requestAnimationFrame(animateModal);
  };

  const handleMouseUp = () => {
    setDragging(false);

    // Check if the modal's top position is within 10% from the bottom
    if (modalPosition.top >= closeThreshold) {
      closeModalSmoothly();
    }
  };

  const modalStyle = {
    top: `${modalPosition.top}px`,
    left: `${modalPosition.left}px`,
  };

  return (
    <div>
      {isOpen && (
        <div
          className="modal"
          style={modalStyle}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          ref={modalRef}
        >
          {/* Modal header for dragging */}
          <div className="modal-header">
            <h2>Modal Header</h2>
            <button onClick={onClose}>Close</button>
          </div>

          <div className="modal-content">
            <p>This is the content of your modal.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalComponent;

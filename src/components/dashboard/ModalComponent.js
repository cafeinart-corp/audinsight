import "./ModalComponent.css"; // Replace with the correct path to your CSS file
import React, { useState } from "react";

function ModalComponent({ isOpen, onClose }) {
  const [dragging, setDragging] = useState(false);
  const [initialY, setInitialY] = useState(0);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [draggedAndDropped, setDraggedAndDropped] = useState(false);

  const handleMouseDown = (e) => {
    setDragging(true);
    setInitialY(e.clientY);
    setDraggedAndDropped(false);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const deltaY = e.clientY - initialY;

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

    // Check if the modal was dragged and dropped
    if (draggedAndDropped) {
      onClose();
    }
  };

  const handleDraggedAndDropped = () => {
    // Set a flag to indicate that the modal was dragged and dropped
    setDraggedAndDropped(true);
  };

  const modalStyle = {
    top: `${modalPosition.top}px`,
    left: `${modalPosition.left}px`,
  };

  const modalHeight = 300;

  return (
    <div>
      {isOpen && (
        <div className="modal" style={modalStyle}>
          {/* Modal header for dragging */}
          <div
            className="modal-header"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            <h2>Modal Header</h2>
            <button onClick={onClose}>Close</button>
          </div>

          {/* Additional content */}
          <div className="modal-content">
            <p>This is the content of your modal.</p>
          </div>
        </div>
      )}
      {dragging && (
        // This element covers the entire screen and captures the drop event
        <div className="drag-cover" onMouseUp={handleDraggedAndDropped} />
      )}
    </div>
  );
}

export default ModalComponent;

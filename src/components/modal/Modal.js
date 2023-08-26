// Modal.js
import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  render() {
    const { show, onClose, children } = this.props;

    return (
      <div className={`modal ${show ? "show" : ""}`}>
        <div className="modal-content">
          <button onClick={onClose} className="close-button">
            Close
          </button>
          {children}
        </div>
      </div>
    );
  }
}

export default Modal;

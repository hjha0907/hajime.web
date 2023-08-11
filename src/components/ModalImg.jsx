import React from "react";

const modal = {
  position: "fixed",
  zIndex: 99,
  left: 0,
  top: 0,
  width: "80%",
  height: "100vh",
  overflow: "auto",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  display: "top",
};

const close = {
  position: "absolute",
  top: 50,
  right: 50,
  color: "#f1f1f1",
  fontSize: 50,
  fontWeight: "bold",
  cursor: "pointer"
};

const modalContent = {
  display: "flex",
  alignItems: "center",
  width: "85%",
  height: "100%",
  margin: "auto"
};

export const Modal = ({ onOpen, children }) => {
  return <div onClick={onOpen}> {children}</div>;
};

export const ModalContent = ({ onClose, children }) => {
  return (
    <div style={modal}>
      <span style={close} onClick={onClose}>
        &times;
      </span>
      <div style={modalContent}>{children}</div>
    </div>
  );
};
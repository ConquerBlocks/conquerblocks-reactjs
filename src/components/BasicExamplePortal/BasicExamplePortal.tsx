import { ReactNode, useState } from "react";
import { createPortal } from "react-dom";
import "./BasicExamplePortal.css";

const portalRoot = document.getElementById("portal-root");

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
  return createPortal(
    <div className="modal">
      <button onClick={onClose}>Close Modal</button>
      {children}
    </div>,
    portalRoot as HTMLElement,
  );
};

interface Props {
  children: ReactNode;
}

const CustomModal = ({ children }: Props) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button onClick={toggleModal}>Toggle Modal</button>
      {showModal && <Modal onClose={toggleModal}>{children}</Modal>}
    </div>
  );
};

export default CustomModal;

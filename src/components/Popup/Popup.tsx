import { useEffect } from "react";

const Popup: React.FC<any> = ({ children, isOpen, name, onClose, closeByOverlay }) => {
  const closeByEsc = (evt: any) => {
    if (evt.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", closeByEsc);
    }
    return () => {
      document.removeEventListener("keydown", closeByEsc);
    };
  }, [isOpen]);

  return (
    <div
      onClick={closeByOverlay}
      className={`popup popup_place_${name} ${isOpen ? "popup_opened" : ""}`}
    >
      {children}
    </div>
  );
};

export default Popup;

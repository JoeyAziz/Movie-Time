import React, { useEffect } from "react";
import Button, { ButtonProps } from "../Button";
import { createPortal } from "react-dom";
import { useKeypress } from "../../hooks/useKeypress";

export interface ModalProps {
  open?: boolean;
  title?: React.ReactNode;
  onOk?: () => void;
  okText?: string;
  okButtonProps?: ButtonProps;
  onCancel?: () => void;
  cancelText?: string;
  cancelButtonProps?: ButtonProps;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  open = false,
  title,
  children,
  onOk,
  okText = "OK",
  okButtonProps,
  onCancel,
  cancelText = "Cancel",
  cancelButtonProps,
}) => {
  useKeypress("Escape", open, onCancel);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div
      key="container"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto font-mono outline-none bg-slate-900 bg-opacity-45 focus:outline-none"
    >
      <div className="flex flex-col gap-6 p-4 bg-white rounded w-72 md:w-96">
        <div key="header" className="text-lg">
          {title}
        </div>
        <div key="content">{children}</div>
        <div key="footer" className="flex items-center justify-end gap-3">
          <Button key="cancel-button" onClick={onCancel} {...cancelButtonProps}>
            {cancelText}
          </Button>
          <Button key="ok-button" onClick={onOk} className="bg-yellow-400" {...okButtonProps}>
            {okText}
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;

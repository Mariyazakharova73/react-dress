import React, { FC } from "react";
import { Modal } from "antd";

interface IModalAppProps {
  title: string;
  modalText: string;
  open: boolean;
  confirmLoading: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

export const ModalApp: FC<IModalAppProps> = ({
  title,
  modalText,
  open,
  confirmLoading,
  handleOk,
  handleCancel,
}) => {
  return (
    <Modal
      title={title}
      open={open}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <p>{modalText}</p>
    </Modal>
  );
};

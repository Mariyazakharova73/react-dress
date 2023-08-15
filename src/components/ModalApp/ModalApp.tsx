import { Modal } from "antd";
import React, { FC } from "react";

interface IModalAppProps {
  title: string;
  modalText: string;
  open: boolean;
  confirmLoading: boolean;
  handleOk: ()=> void;
  handleCancel: ()=> void
}

const ModalApp: FC<IModalAppProps> = ({ title, modalText, open, confirmLoading, handleOk, handleCancel }) => {
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

export default ModalApp;

import React from "react";
import { Modal } from "antd";

const DeleteModal = ({ show, onCancel, deleteTableUser, userId }) => {
  const deleteUser = () => {
    onCancel();
    deleteTableUser(userId);
  };
  return (
    <div className="modal-popup">
      <Modal
        className="delete-modal"
        centered
        open={show}
        onCancel={onCancel}
        footer={null}
      >
        <p className="text-center fw-600 fs25 my-2">
          Are you sure you want to delete?
        </p>
        <div className="d-flex align-items-center justify-content-center mt-4">
          <button className="btn btn-grey px-5 mx-2" onClick={onCancel}>
            No
          </button>
          <button className="btn btn-blue px-5 mx-2" onClick={deleteUser}>
            Yes
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteModal;

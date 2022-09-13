import React from "react";
import notification from "./notification.svg";

const Modal = (props) => {
  const { sectionRef, listRef, setIsShow, images, id, setImages } = props;

  const showModal = () => {
    sectionRef.current.style.background = "unset";
    listRef.current.style.opacity = "1";
    setIsShow(false);
  };

  const handleRemove = () => {
    const newData = images.filter((item) => item.id !== id);
    setImages(newData);
  };

  return (
    <>
      <div className="modal">
        <h5 className="modal-title">
          <img
            className="modal-notification-image"
            src={notification}
            alt="notification"
          />
          Are you sure to delete this task?
        </h5>
        <div className="btn-group">
          <button className="btn btn-no" onClick={showModal}>
            No
          </button>
          <button
            onClick={() => {
              showModal();
              handleRemove();
            }}
            className="btn btn-yes"
          >
            Yes
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;

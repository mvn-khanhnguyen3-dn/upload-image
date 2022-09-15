import notification from "./notification.svg";

const Modal = (props) => {
  const { index, sectionRef, listRef, setIsShowBtn, item, handleRemove } =
    props;

  const showModal = () => {
    sectionRef.current.style.background = "unset";
    listRef.current.style.pointerEvents = "unset";
    listRef.current.style.opacity = "1";
    setIsShowBtn(false);
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
              handleRemove(item, index);
              showModal();
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

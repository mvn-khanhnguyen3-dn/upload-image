import React from "react";
import close from "./close.svg";

const ImageDetail = (props) => {
  const { item, sectionRef, listRef, setIsShow } = props;

  const showModal = () => {
    sectionRef.current.style.background = "unset";
    listRef.current.style.pointerEvents = "unset";
    listRef.current.style.opacity = "1";
    setIsShow(false);
  };
  return (
    <div className="modal show-image">
      <h3 className="modal-name">{item.name}</h3>
      <img className="image-show" src={URL.createObjectURL(item)} alt="" />
      <img src={close} onClick={showModal} className="btn btn-close" alt="" />
    </div>
  );
};

export default ImageDetail;

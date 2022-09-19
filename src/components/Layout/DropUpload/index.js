import { useRef, useState } from "react";
import uploadImg from "./upload-clound.png";
import useHook from "../../../hooks/useHook";
import ImageDetail from "../../Modules/ImageDetail";
import ImageItem from "../../Modules/ImageItem";

const DropUpload = () => {
  const wrapperRef = useRef(null);
  const [isShow, setIsShow] = useState(false);
  const [item, setItem] = useState();

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");

  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");

  const onDrop = (e) => {
    wrapperRef.current.classList.remove("dragover");
    e.target.value = null;
  };

  const {
    images,
    listRef,
    sectionRef,
    handleChangeImage,
    handleRemove,
    handleShow,
    handleRemoveAll,
    showModal,
  } = useHook();

  const handleShowImage = (item) => {
    handleShow();
    setItem(item);
    setIsShow(!isShow);
  };

  return (
    <>
      <div ref={sectionRef} className="section-upload">
        <div
          ref={wrapperRef}
          className="drop-file-input"
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          <div className="drop-file-input__label">
            <img src={uploadImg} alt="" />
            <p>Drag & Drop your files here</p>
          </div>
          <input
            type="file"
            accept="image/*"
            multiple
            value=""
            onChange={handleChangeImage}
            onClick={(e) => (e.target.value = null)}
            style={{ pointerEvents: !isShow ? "unset" : "none" }}
          />
        </div>
        {images && (
          <ul ref={listRef} className="drop-file-preview image-list">
            {images.map((item, index) => (
              <ImageItem
                key={item.id}
                item={item}
                index={index}
                handleShowImage={handleShowImage}
                handleBtnRemove={handleRemove}
              />
            ))}
          </ul>
        )}
        {images.length > 1 && (
          <button
            style={{
              pointerEvents: isShow ? "none" : "unset",
              opacity: isShow ? "0" : "unset",
            }}
            onClick={handleRemoveAll}
            className="btn btn-remove-all"
          >
            <div id="translate"></div>
            <span>Remove All</span>
          </button>
        )}
      </div>
      {isShow && (
        <ImageDetail
          item={item}
          setItem={setItem}
          setIsShow={setIsShow}
          showModal={showModal}
          images={images}
        />
      )}
    </>
  );
};

export default DropUpload;

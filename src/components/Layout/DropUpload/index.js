import { useRef, useState } from "react";
import uploadImg from "./upload-clound.png";
import useHook from "../../../hooks/useHook";
import ShowImage from "../../Modules/ImageDetail";
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
            onChange={handleChangeImage}
            onClick={(e) => (e.target.value = null)}
          />
        </div>
        {images && (
          <ul ref={listRef} className="drop-file-preview image-list">
            {images.map((item, index) => (
              <ImageItem
                key={index}
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
              opacity: isShow ? ".6" : "unset",
            }}
            onClick={handleRemoveAll}
            className="btn btn-remove-all"
          >
            Remove All
          </button>
        )}
      </div>
      {isShow && (
        <ShowImage
          item={item}
          sectionRef={sectionRef}
          listRef={listRef}
          setIsShow={setIsShow}
        />
      )}
    </>
  );
};

export default DropUpload;

import { useState } from "react";
import Modal from "../../Modules/Modal";
import ShowImage from "../../Modules/ImageDetail";
import useHook from "../../../hooks/useHook";
import ImageItem from "../../Modules/ImageItem";

const Upload = () => {
  const [isShow, setIsShow] = useState(false);
  const [isShowBtn, setIsShowBtn] = useState(false);
  const [item, setItem] = useState();
  const [index, setIndex] = useState();

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

  const handleBtnRemove = (item, index) => {
    handleShow();
    setItem(item);
    setIndex(index);
    setIsShowBtn(!isShowBtn);
  };
  return (
    <section ref={sectionRef} className="section-upload">
      <h3 className="upload-title">Upload Images</h3>
      <input
        type="file"
        id="input-selected"
        accept="image/*"
        className="custom-file-input"
        onChange={handleChangeImage}
        multiple
        style={{ display: "none" }}
        onClick={(e) => (e.target.value = null)}
      />

      <label
        style={{ pointerEvents: !isShowBtn ? "unset" : "none" }}
        className="input-choose"
        htmlFor="input-selected"
      >
        Upload
      </label>
      {images && (
        <ul ref={listRef} className="image-list">
          {images?.map((item, index) => (
            <ImageItem
              key={index}
              item={item}
              index={index}
              handleShowImage={handleShowImage}
              handleBtnRemove={handleBtnRemove}
            />
          ))}
        </ul>
      )}
      {images.length > 1 && (
        <button
          style={{
            pointerEvents: isShowBtn || isShow ? "none" : "unset",
            opacity: isShowBtn || isShow ? ".6" : "unset",
          }}
          onClick={handleRemoveAll}
          className="btn btn-remove-all"
        >
          Remove All
        </button>
      )}

      {isShowBtn && (
        <Modal
          item={item}
          index={index}
          sectionRef={sectionRef}
          listRef={listRef}
          setIsShowBtn={setIsShowBtn}
          handleRemove={handleRemove}
        />
      )}
      {isShow && (
        <ShowImage
          item={item}
          sectionRef={sectionRef}
          listRef={listRef}
          setIsShow={setIsShow}
        />
      )}
    </section>
  );
};

export default Upload;

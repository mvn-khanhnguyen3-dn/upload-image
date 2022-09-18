import { useState } from "react";
import Modal from "../../Modules/Modal";
import useHook from "../../../hooks/useHook";
import ImageItem from "../../Modules/ImageItem";
import ImageDetail from "../../Modules/ImageDetail";
import TextUpload from "../../Modules/TextUpload";

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
    showModal,
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
      <TextUpload />
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
              key={item.id}
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
            pointerEvents: isShowBtn ? "none" : "unset",
            opacity: isShowBtn ? "0" : "unset",
          }}
          onClick={handleRemoveAll}
          className="btn btn-remove-all"
        >
          <div id="translate"></div>
          <span>Remove All</span>
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
        <ImageDetail
          images={images}
          item={item}
          setItem={setItem}
          showModal={showModal}
          setIsShow={setIsShow}
        />
      )}
    </section>
  );
};

export default Upload;

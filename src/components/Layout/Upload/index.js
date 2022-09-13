import React, { useEffect, useRef, useState } from "react";
import Modal from "../../Modules/Modal";
import trash from "./trash.svg";

const Upload = () => {
  const [images, setImages] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [id, setId] = useState(0);
  let sectionRef = useRef();
  let listRef = useRef();

  useEffect(() => {
    return () => {
      images && URL.revokeObjectURL(images);
    };
  }, [images]);

  const handleChangeImage = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      images.push({
        fileInput: e.target.files[i],
        id: Math.random(i * 123456).toFixed(3),
      });
    }
    setImages([...images]);
  };

  const handleShow = (id) => {
    setId(id);
    setIsShow(!isShow);
    sectionRef.current.style.background = "#00000073";
    listRef.current.style.opacity = "0.6";
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
      <label className="input-choose" htmlFor="input-selected">
        Upload
      </label>
      {images && (
        <ul ref={listRef} className="image-list">
          {images?.map((item) => (
            <li key={item.id} className="image-item">
              <div className="image-content">
                <img
                  className="upload-image"
                  src={URL.createObjectURL(item.fileInput)}
                  alt={item.fileInput.name}
                />
                <h5 className="image-name">{item.fileInput.name}</h5>
              </div>
              <span className="image-size">{`${Math.round(
                item.fileInput.size
              )}MB`}</span>
              <img
                className="btn-remove"
                onClick={() => handleShow(item.id)}
                src={trash}
                alt="trash"
              />
            </li>
          ))}
        </ul>
      )}
      {isShow && (
        <Modal
          id={id}
          images={images}
          setImages={setImages}
          sectionRef={sectionRef}
          listRef={listRef}
          setIsShow={setIsShow}
        />
      )}
    </section>
  );
};

export default Upload;

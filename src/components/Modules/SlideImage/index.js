import React from "react";

const SlideImage = ({ images, setItem }) => {
  const handleChangeImage = (image) => {
    const modalImage = document.querySelector(".show-image");
    modalImage.style.width = "35%";
    setTimeout(() => {
      setItem(image);
      modalImage.style.width = "50%";
    }, 800);
  };
  return (
    <ul className="slide-list modal">
      {images.map((item) => (
        <li key={item.id} className="slide-item">
          <img
            className="image-show slide-item_image"
            src={URL.createObjectURL(item.data)}
            alt={item.data.name}
            onClick={() => handleChangeImage(item.data)}
          />
        </li>
      ))}
    </ul>
  );
};

export default SlideImage;

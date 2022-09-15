import trash from "./trash.svg";

const ImageItem = (props) => {
  const { index, item, handleShowImage, handleBtnRemove } = props;

  return (
    <li className="image-item">
      <div className="image-content">
        <img
          className="upload-image"
          src={URL.createObjectURL(item)}
          alt={item.name}
          onClick={() => handleShowImage(item)}
        />
        <h5 className="image-name">
          {item.name.length > 35
            ? item.name?.substring(0, 10) +
              "..." +
              item.name?.substring(40, item.name.length)
            : item.name}
        </h5>
      </div>
      <span className="image-size">{`${Math.round(item.size)}KB`}</span>
      <img
        className="btn-remove"
        onClick={() => {
          handleBtnRemove(item, index);
        }}
        src={trash}
        alt="trash"
      />
    </li>
  );
};

export default ImageItem;

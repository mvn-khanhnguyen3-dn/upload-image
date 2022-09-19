import ProgressBar from "../ProgressBar";
import trash from "./trash.svg";

const ImageItem = (props) => {
  const { index, item, handleShowImage, handleBtnRemove } = props;

  return (
    <li className="image-item">
      <div className="image-content">
        <div className="image-progress">
          <img
            className="upload-image"
            src={URL.createObjectURL(item.data)}
            alt={item.data.name}
            onClick={() => handleShowImage(item.data)}
          />
          <ProgressBar />
        </div>
        <h5 className="image-name">
          {item.data.name.length > 35
            ? item.data.name.substring(0, 10) +
              "..." +
              item.data.name.substring(40, item.data.name.length)
            : item.data.name}
        </h5>
      </div>
      <span className="image-size">{`${Math.round(item.data.size)}KB`}</span>
      <img
        className="btn-remove"
        onClick={() => {
          handleBtnRemove(item.id, index);
        }}
        src={trash}
        alt="trash"
      />
    </li>
  );
};

export default ImageItem;

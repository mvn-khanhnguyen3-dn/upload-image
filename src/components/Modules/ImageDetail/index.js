import SlideImage from "../SlideImage";
import close from "./close.svg";

const ImageDetail = (props) => {
  const { item, setIsShow, images, showModal, setItem } = props;

  const openModal = () => {
    showModal();
    setIsShow(false);
  };

  return (
    <>
      <div className="modal show-image">
        <h3 className="modal-name">{item.name}</h3>
        <img className="image-show" src={URL.createObjectURL(item)} alt="" />
        <img src={close} onClick={openModal} className="btn btn-close" alt="" />
      </div>
      <SlideImage images={images} setItem={setItem} />
    </>
  );
};

export default ImageDetail;

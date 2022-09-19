import { useState, useEffect, useRef, useTransition } from "react";

const useHook = () => {
  const [images, setImages] = useState([]);
  const [isPending, startTransition] = useTransition(false);

  let sectionRef = useRef();
  let listRef = useRef();

  useEffect(() => {
    return () => {
      images && URL.revokeObjectURL(images);
    };
  }, [images]);

  const handleChangeImage = (e) => {
    startTransition(() => {
      for (let i = 0; i < e.target.files.length; i++) {
        images.push({
          id: Math.random().toString(36).substr(2, 5),
          data: e.target.files[i],
        });
      }
      setImages([...images]);
    });
  };

  const handleRemove = (file, index) => {
    const actionItems = document.querySelectorAll(".image-item");
    actionItems[index]?.classList.add("action-remove");
    const newData = images.filter((image) => image.id !== file);
    const timeId = setTimeout(() => {
      setImages(newData);
      actionItems[index]?.classList.remove("action-remove");
    }, 800);
    return () => {
      window.clearTimeout(timeId);
    };
  };

  const handleRemoveAll = () => {
    setImages([]);
  };

  const handleShow = () => {
    sectionRef.current.style.background = "#00000073";
    listRef.current.style.pointerEvents = "none";
    listRef.current.style.opacity = "0.5";
  };

  const showModal = () => {
    sectionRef.current.style.background = "unset";
    listRef.current.style.pointerEvents = "unset";
    listRef.current.style.opacity = "1";
  };

  return {
    handleChangeImage,
    setImages,
    handleRemove,
    handleShow,
    showModal,
    handleRemoveAll,
    images,
    sectionRef,
    listRef,
    isPending,
  };
};

export default useHook;

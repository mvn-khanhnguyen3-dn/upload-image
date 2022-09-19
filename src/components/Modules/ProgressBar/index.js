import React, { useEffect, useRef } from "react";

const ProgressBar = () => {
  const progressRef = useRef();
  useEffect(() => {
    const timeId = setTimeout(() => {
      progressRef.current.style.display = "none";
    }, 1000);
    return () => {
      window.clearTimeout(timeId);
    };
  });
  return <div ref={progressRef} className="myProgress"></div>;
};

export default ProgressBar;

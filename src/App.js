import { useState } from "react";
import Upload from "./components/Layout/Upload";
import DropUpload from "./components/Layout/DropUpload";
import "./App.css";

function App() {
  const [isLayout, setIsLayout] = useState(false);

  const handleShowLayout = () => {
    setIsLayout(!isLayout);
  };

  return (
    <>
      <button
        className="btn btn-change-layout btn-white btn-animate"
        onClick={() => handleShowLayout()}
      >
        {isLayout ? "List Image" : "DragDrop"}
      </button>
      {isLayout ? <Upload /> : <DropUpload />}
    </>
  );
}

export default App;

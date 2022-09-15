import "./App.css";
import Upload from "./components/Layout/Upload";
import DropUpload from "./components/Layout/DropUpload";
import { useState } from "react";

function App() {
  const [isLayout, setIsLayout] = useState(false);

  const handleShowLayout = () => {
    setIsLayout(!isLayout);
  };

  return (
    <>
      <button
        className="btn btn-change-layout"
        onClick={() => handleShowLayout()}
      >
        Change Layout : {isLayout ? "List Image" : "DragDrop"}
      </button>
      {isLayout ? <Upload /> : <DropUpload />}
    </>
  );
}

export default App;

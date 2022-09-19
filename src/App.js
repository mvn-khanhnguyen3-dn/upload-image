import { useState, Suspense, lazy } from "react";
import "./App.css";
import Loading from "./components/Modules/Loading";

const Upload = lazy(() => import("./components/Layout/Upload"));
const DropUpload = lazy(() => import("./components/Layout/DropUpload"));

function App() {
  const [isLayout, setIsLayout] = useState(false);

  const handleShowLayout = () => {
    setIsLayout(!isLayout);
  };

  return (
    <Suspense fallback={<Loading />}>
      <button
        className="btn btn-change-layout btn-white btn-animate"
        onClick={() => handleShowLayout()}
      >
        {isLayout ? "List Image" : "DragDrop"}
      </button>
      {isLayout ? <Upload /> : <DropUpload />}
    </Suspense>
  );
}

export default App;

import { useState } from "react";
import BarCodeReader from "./components/BarcodeReader/BarcodeReader";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BarcodeContext } from "./BarcodeContext";

function App() {
  const [barcode, setBarcode] = useState(null);

  return (
    <BarcodeContext.Provider value={{ barcode, setBarcode }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/barcode" element={<BarCodeReader />} />
        </Routes>
      </BrowserRouter>
    </BarcodeContext.Provider>
  );
}

export default App;

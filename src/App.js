import { useState } from "react";
import BarCodeReader from "./components/BarcodeReader/BarcodeReader";
import { BarcodeContext } from "./BarcodeContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [barcode, setBarcode] = useState(null);

  return (
    <BarcodeContext.Provider value={{ barcode, setBarcode }}>
      <Router>
        <Switch>
          <Route path="/">
            <BarCodeReader />
          </Route>
        </Switch>
      </Router>
    </BarcodeContext.Provider>
  );
}

export default App;

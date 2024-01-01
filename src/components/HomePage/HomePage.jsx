import React, { useContext } from "react";
import "./HomePage.css";
import logoSearch from "../../assets/barcode-scan-icon.svg";
import { useNavigate } from "react-router-dom";
import { BarcodeContext } from "../../BarcodeContext";

const HomePage = () => {
  const navigate = useNavigate();
  const { barcode } = useContext(BarcodeContext);

  return (
    <div className="home-container">
      <h1>
        Welcome to <u>No Thanks Scanner</u>
      </h1>
      <div className="scan-container">
        <p>Scan your product: </p>
        <img
          src={logoSearch}
          alt="search logo"
          className="scan-logo"
          onClick={() => navigate("/barcode")}
        />
      </div>

      <div className="barcode-container">
        {barcode ? (
          <h3>
            Last barcode is: <u>{barcode}</u>
          </h3>
        ) : (
          <h3>You haven't scanned yet!!!</h3>
        )}
      </div>
    </div>
  );
};

export default HomePage;

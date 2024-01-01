import "./BarcodeReader.css";
import "../../dbr.js";
import { BarcodeReader } from "dynamsoft-javascript-barcode";
import React, { useEffect, useState } from "react";
import VideoDecode from "../VideoDecode/VideoDecode";
import logoSvg from "../../assets/logo.svg";

const BarCodeReader = () => {
  const [scanNumber, setScanNumber] = useState(0);

  useEffect(() => {
    const loadWasm = async () => {
      try {
        await BarcodeReader.loadWasm();
      } catch (ex) {
        if (ex.message.indexOf("network connection error") !== -1) {
          let customMsg =
            "Failed to connect to Dynamsoft License Server: network connection error. Check your Internet connection or contact Dynamsoft Support (support@dynamsoft.com) to acquire an offline license.";
          alert(customMsg);
        }
        throw ex;
      }
    };

    loadWasm();
  }, []);

  const handleSetScanNumber = (number) => {
    setScanNumber(number);
  };

  return (
    <div className="helloWorld">
      <div className="container">
        <div className="logo-container">
          <img src={logoSvg} alt="logo" className="logo-image" />
          <h1 className="logo-title">No Thanks Scanner</h1>
        </div>
        <VideoDecode setScanNumber={handleSetScanNumber} />
        {scanNumber !== 0 && (
          <h2>
            The last read barcode is: <u>{scanNumber}</u>
          </h2>
        )}
      </div>
    </div>
  );
};

export default BarCodeReader;

import React, { useEffect, useRef, useContext } from "react";
import { BarcodeScanner } from "dynamsoft-javascript-barcode";
import { BarcodeContext } from "../../BarcodeContext";
import { useNavigate } from "react-router-dom";
import "./VideoDecode.css";

const VideoDecode = () => {
  const elRef = useRef(null);
  const pScannerRef = useRef(null);
  const { setBarcode } = useContext(BarcodeContext);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeScanner = async () => {
      try {
        const scanner = await BarcodeScanner.createInstance();
        pScannerRef.current = scanner;

        if (pScannerRef.current.isContextDestroyed()) return;
        await pScannerRef.current.setUIElement(elRef.current);
        if (pScannerRef.current.isContextDestroyed()) return;
        pScannerRef.current.onUniqueRead = (txt, result) => {
          setBarcode(txt);
          navigate("/");
        };
        await pScannerRef.current.open();
      } catch (ex) {
        if (ex.message.indexOf("network connection error") !== -1) {
          let customMsg =
            "Failed to connect to Dynamsoft License Server: network connection error. Check your Internet connection or contact Dynamsoft Support (support@dynamsoft.com) to acquire an offline license.";
          alert(customMsg);
        }
        throw ex;
      }
    };

    initializeScanner();

    return () => {
      if (pScannerRef.current) {
        pScannerRef.current.destroyContext();
      }
    };
  }, [setBarcode, navigate]);

  return (
    <div ref={elRef} className="component-barcode-scanner">
      <div className="dce-video-container"></div>
    </div>
  );
};

export default VideoDecode;

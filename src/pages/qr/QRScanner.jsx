import React, { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import './scanner_style.css';

const QRScanner = () => {
    const [scanResult, setScanResult] = React.useState(null);

    React.useEffect(() => {
        const scanner = new Html5QrcodeScanner("reader", {
            qrbox: {
                width: 200,
                height: 200,
                top: 200,
                borderRadius: 5
            },
            fps: 5
        })

        scanner.render(success);

        function success(result) {
            scanner.clear();
            setScanResult(result);
        }

        if (scanResult) {
            console.log(scanResult);
        }

        return () => {
            scanner.clear();
        };
    });

    return (
        <div>
            <div id="reader" className="rounded-qrcode-box"></div>
            {scanResult ? <div>{scanResult}</div> : null}
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <p>Place the QR code inside the scanning box</p>
            </div>
        </div>
    );
};

export default QRScanner;

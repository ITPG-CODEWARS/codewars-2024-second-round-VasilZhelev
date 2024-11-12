import React from 'react';
import { QRCodeCanvas } from 'qrcode.react'; // Import QRCode component from qrcode.react

const QRCodeGenerator = ({ url }) => (
  <div style={{ marginTop: '20px' }}>
    {/* Generate and display QR code for the URL */}
    <QRCodeCanvas value={url} size={150} bgColor="#121212" fgColor="#fff" />
    <p>QR Code for your link</p>
  </div>
);

export default QRCodeGenerator;

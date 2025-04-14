import "../styles/QRCode.css"

const QRCode = () => {
  return (
    <div className="card">
       <img src="src/images/image-qr-code.png" alt="QR Code" className="qrCode" ></img>
       <div className="card-body outfit">
            <p className="top-text">Improve your front-end skills by building projects</p>
            <p className="bottom-text">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
       </div>
    </div>
  );
} 

export default QRCode;

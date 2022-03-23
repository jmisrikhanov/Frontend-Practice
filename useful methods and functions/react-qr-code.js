// react-qr-code is an npm pkg that helps us to generate QR-code.

import QRCode from "react-qr-code";

function App() {
  return (
    <div className="App">
      <QRCode value={"Hell :)"}></QRCode>
    </div>
  );
}

export default App;

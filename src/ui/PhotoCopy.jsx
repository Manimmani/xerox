import "../styles/photocopy.css";
import { useState } from "react";

const PhotoCopy = () => {
  const [printType, setPrintType] = useState("Black & White");
  const [numCopies, setNumCopies] = useState(1);
  const [document, setDocument] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("GPay");

  // Pricing logic
  const pricePerCopy = {
    "Black & White": 1, // ₹1 per copy
    Color: 5, // ₹5 per copy
  };

  const totalCost = numCopies * pricePerCopy[printType];

  const handleFileChange = (e) => {
    setDocument(e.target.files[0]);
  };

  const handleOrder = () => {
    if (!document) {
      alert("Please upload a document for photocopying.");
      return;
    }
    alert(`Order Placed! Print: ${printType}, Copies: ${numCopies}, Cost: ₹${totalCost}, Payment: ${paymentMethod}`);
  };

  return (
    <div className="photocopy-container">
      <h2 className="title">Photocopy Services</h2>
      <p className="subtitle">Choose print type, enter number of copies & upload your document</p>

      <div className="photocopy-options">
        <label>Print Type:</label>
        <select value={printType} onChange={(e) => setPrintType(e.target.value)}>
          <option>Black & White</option>
          <option>Color</option>
        </select>

        <label>Number of Copies:</label>
        <input
          type="number"
          min="1"
          max="500"
          value={numCopies}
          onChange={(e) => setNumCopies(e.target.value)}
        />

        <label>Upload Document:</label>
        <input type="file" accept=".pdf,.docx,.ppt,.jpg,.png" onChange={handleFileChange} />

        <p className="cost">Estimated Cost: ₹{totalCost}</p>

        <label>Payment Method:</label>
        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
          <option>GPay</option>
          <option>PhonePe</option>
          <option>UPI</option>
        </select>
      </div>

      <button className="order-btn" onClick={handleOrder}>Place Order</button>
    </div>
  );
};

export default PhotoCopy;

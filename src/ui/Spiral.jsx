import "../styles/spiral.css";
import { useState } from "react";

const SpiralBinding = () => {
  const [bindingType, setBindingType] = useState("Plastic");
  const [pageCount, setPageCount] = useState(10);
  const [document, setDocument] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("GPay");

  // Pricing logic
  const pricePerPage = {
    Plastic: 2,
    Wire: 3,
    Metal: 4,
  };

  const totalCost = pageCount * pricePerPage[bindingType];

  const handleFileChange = (e) => {
    setDocument(e.target.files[0]);
  };

  const handleOrder = () => {
    if (!document) {
      alert("Please upload a document for spiral binding.");
      return;
    }
    alert(`Order Placed! Binding: ${bindingType}, Pages: ${pageCount}, Cost: ₹${totalCost}, Payment: ${paymentMethod}`);
  };

  return (
    <div className="spiral-container">
      <h2 className="title">Spiral Binding Services</h2>
      <p className="subtitle">Select binding type, enter page count & upload your document</p>

      <div className="spiral-options">
        <label>Binding Type:</label>
        <select value={bindingType} onChange={(e) => setBindingType(e.target.value)}>
          <option>Plastic</option>
          <option>Wire</option>
          <option>Metal</option>
        </select>

        <label>Number of Pages:</label>
        <input
          type="number"
          min="1"
          max="500"
          value={pageCount}
          onChange={(e) => setPageCount(e.target.value)}
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

export default SpiralBinding;

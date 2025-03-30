import "../styles/lamination.css";
import { useState } from "react";

const Lamination = () => {
  const [size, setSize] = useState("A4");
  const [type, setType] = useState("Glossy");
  const [thickness, setThickness] = useState("80 microns");
  const [document, setDocument] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("GPay");
  const confirmPayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method!");
      return;
    }
    alert(`Payment Successful! Size: ${size}, Type: ${type}, Thickness: ${thickness}, Cost: ₹${cost}, Payment: ${paymentMethod}`);
  };

  // Pricing logic
  const priceList = {
    A4: { "80 microns": 10, "125 microns": 15, "250 microns": 20 },
    A3: { "80 microns": 15, "125 microns": 20, "250 microns": 30 },
    "ID Card": { "80 microns": 5, "125 microns": 10, "250 microns": 15 },
  };

  const cost = priceList[size]?.[thickness] || 10;

  const handleFileChange = (e) => {
    setDocument(e.target.files[0]);
  };

  const handleOrder = () => {
    if (!document) {
      alert("Please upload a document for lamination.");
      return;
    }
    alert(`Order Placed! Size: ${size}, Type: ${type}, Thickness: ${thickness}, Cost: ₹${cost}, Payment: ${paymentMethod}`);
  };

  return (
    <div className="lamination-container">
      <h2 className="title">Lamination Services</h2>
      <p className="subtitle">Select your preferences and upload your document</p>

      <div className="lamination-options">
        <label>Size:</label>
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option>A4</option>
          <option>A3</option>
          <option>ID Card</option>
        </select>

        <label>Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option>Glossy</option>
          <option>Matte</option>
          <option>Thermal</option>
          <option>Cold</option>
          <option>Pouch</option>
        </select>

        <label>Thickness:</label>
        <select value={thickness} onChange={(e) => setThickness(e.target.value)}>
          <option>80 microns</option>
          <option>125 microns</option>
          <option>250 microns</option>
        </select>

        <label>Upload Document:</label>
        <input type="file" accept=".pdf,.jpg,.png" onChange={handleFileChange} />

        <p className="cost">Estimated Cost: ₹{cost}</p>
        <div className="payment-options">
          <h3>Select Payment Method</h3>
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option value="">-- Choose Payment Method --</option>
            <option>GPay</option>
            <option>PhonePe</option>
            <option>UPI</option>
            <option>Cardless Transaction</option>
          </select>
          <button className="confirm-btn" onClick={confirmPayment}>Pay with {paymentMethod}</button>
        </div>
      </div>

      <button className="order-btn" onClick={handleOrder}>Place Order</button>
    </div>
  );
};

export default Lamination;

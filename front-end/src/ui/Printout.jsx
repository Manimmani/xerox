import React, { useState } from "react";
import axios from "axios"; // Make sure this is imported
import "../styles/printout.css";

const PrintoutFormat = () => {
  const [file, setFile] = useState(null);
  const [paperSize, setPaperSize] = useState("A4");
  const [printType, setPrintType] = useState("Single-Sided");
  const [colorOption, setColorOption] = useState("Black & White");
  const [pageCount, setPageCount] = useState(1);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const getCostPerPage = () => {
    let cost = 1;
    if (colorOption === "Color") cost += 3;
    if (printType === "Double-Sided") cost -= 0.5;
    if (paperSize === "A3") cost += 2;
    return cost;
  };

  const totalCost = pageCount * getCostPerPage();

  const handleProceed = () => {
    // if (!file) {
    //   alert("Please upload a document.");
    //   return;
    // }

    // const orderData = {
    //   fileName: file.name,
    //   paperSize,
    //   printType,
    //   colorOption,
    //   pageCount,
    //   totalCost,
    // };

    // axios
    //   .post("http://localhost:3000/submit-order", orderData)
    //   .then((res) => {
    //     alert(`${res.data.message}`);
    //     // navigate('/payment');
    //   })
    //   .catch((err) => {
    //     alert(err.response?.data?.message || "Error submitting order.");
    //   });
      if (!file) {
        alert("Please upload a document.");
        return;
      }
    
      const formData = new FormData();
      formData.append("file", file);
      formData.append("paperSize", paperSize);
      formData.append("printType", printType);
      formData.append("colorOption", colorOption);
      formData.append("pageCount", pageCount);
      formData.append("totalCost", totalCost);
    
      axios
        .post("http://localhost:3000/submit-order", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          alert(`${res.data.message}`);
          // optionally redirect
        })
        .catch((err) => {
          alert(err.response?.data?.message || "Error submitting order.");
        });
    };

  return (
    <div className="container">
      <h2 className="title">Printout Formatting Options</h2>
      <form>
        <label className="form-label">Upload Document:</label>
        <input
          type="file"
          accept=".pdf, .docx, .png, .jpg, .jpeg"
          onChange={handleFileChange}
          className="file-input"
        />
        {file && <p className="file-preview">Selected File: {file.name}</p>}

        <label className="form-label">Paper Size:</label>
        <select className="form-select" onChange={(e) => setPaperSize(e.target.value)}>
          <option value="A4">A4</option>
          <option value="A3">A3</option>
        </select>

        <label className="form-label">Print Type:</label>
        <select className="form-select" onChange={(e) => setPrintType(e.target.value)}>
          <option value="Single-Sided">Single-Sided</option>
          <option value="Double-Sided">Double-Sided</option>
        </select>

        <label className="form-label">Color Option:</label>
        <select className="form-select" onChange={(e) => setColorOption(e.target.value)}>
          <option value="Black & White">Black & White</option>
          <option value="Color">Color</option>
        </select>

        <label className="form-label">Number of Pages:</label>
        <input
          type="number"
          min="1"
          value={pageCount}
          onChange={(e) => setPageCount(Number(e.target.value))}
          className="page-input"
        />

        <p className="cost">Cost per Page: ₹{getCostPerPage()}</p>
        <p className="total-cost">Total Cost: ₹{totalCost}</p>

        <button type="button" className="form-button" onClick={handleProceed}>
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default PrintoutFormat;


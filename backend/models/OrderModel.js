// const mongoose = require('mongoose');

// const OrderSchema = new mongoose.Schema({
//   fileName: String,
//   paperSize: String,
//   printType: String,
//   colorOption: String,
//   pageCount: Number,
//   totalCost: Number,
//   createdAt: {
//     type: Date,
//     default: Date.now
//   },
//   status: {
//     type: String,
//     default: 'Pending'
//   }
// });

// module.exports = mongoose.model('Order', OrderSchema);
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  fileUrl: String,
  fileName: String,
  paperSize: String,
  printType: String,
  colorOption: String,
  pageCount: Number,
  totalCost: Number,
  status: {
    type: String,
    default: 'Pending'
  }
});

module.exports = mongoose.model("Order", OrderSchema);

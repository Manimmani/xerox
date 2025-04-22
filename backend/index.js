// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const multer = require('multer');
// const path = require('path');
// require('dotenv').config();

// const StudentModel = require('./models/Student');
// const OrderModel = require('./models/OrderModel');

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// mongoose.connect(process.env.mongo_url);

// // ------------------ Multer Config --------------------
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, 'uploads/'),
//   filename: (req, file, cb) => cb(null, `${Date.now()}_${file.originalname}`)
// });
// const upload = multer({ storage });

// // ------------------ Order Submit ---------------------
// app.post('/submit-order', upload.single('file'), async (req, res) => {
//   try {
//     const activeOrdersCount = await OrderModel.countDocuments({ status: 'Pending' });

//     if (activeOrdersCount >= 50) {
//       return res.status(400).json({ message: 'Queue full. Try again later.' });
//     }

//     if (!req.file) {
//       return res.status(400).json({ message: 'No file uploaded.' });
//     }

//     const newOrder = new OrderModel({
//       fileUrl: `http://localhost:3000/uploads/${req.file.filename}`,
//       fileName: req.file.originalname,
//       paperSize: req.body.paperSize,
//       printType: req.body.printType,
//       colorOption: req.body.colorOption,
//       pageCount: req.body.pageCount,
//       totalCost: req.body.totalCost,
//       status: 'Pending'
//     });

//     await newOrder.save();
//     res.status(200).json({ message: 'Order submitted successfully.' });
//   } catch (err) {
//     res.status(500).json({ message: 'Internal server error.' });
//   }
// });

// // ------------------ Get Active Orders ----------------
// app.get('/orders', async (req, res) => {
//   const orders = await OrderModel.find({ status: 'Pending' });
//   res.json(orders);
// });

// // ------------------ Complete Order -------------------
// app.post('/complete-order/:id', async (req, res) => {
//   const { id } = req.params;
//   await OrderModel.findByIdAndUpdate(id, { status: 'Completed' });
//   res.json({ message: 'Order marked as completed.' });
// });

// // ------------------ Student Registration -------------
// app.post('/register', (req, res) => {
//   StudentModel.create(req.body)
//     .then(result => res.json(result))
//     .catch(err => res.json(err));
// });

// // ------------------ Login ----------------------------
// app.post('/login', (req, res) => {
//   const { email, password } = req.body;
//   StudentModel.findOne({ email: email })
//     .then(ans => {
//       if (ans) {
//         if (ans.password === password) {
//           res.json("success");
//         } else {
//           res.json("the password is incorrect");
//         }
//       } else {
//         res.json("No record existed");
//       }
//     })
//     .catch(err => console.log(err));
// });

// // ------------------ Default Route ---------------------
// app.get('/', (req, res) => {
//   res.send("hello how are");
// });

// app.listen(3000, () => {
//   console.log("server is running on port 3000");
// });
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const StudentModel = require('./models/Student');
const OrderModel = require('./models/OrderModel');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// ------------------ Multer Config --------------------
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}_${file.originalname}`)
});
const upload = multer({ storage });

// ------------------ MongoDB Connection ---------------
mongoose.connect(process.env.mongo_url);

// ------------------ Order Submit ---------------------
app.post('/submit-order', upload.single('file'), async (req, res) => {
  try {
    const activeOrdersCount = await OrderModel.countDocuments({ status: 'Pending' });

    if (activeOrdersCount >= 50) {
      return res.status(400).json({ message: 'Queue full. Try again later.' });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded.' });
    }

    const newOrder = new OrderModel({
      fileUrl: `http://localhost:3000/uploads/${req.file.filename}`,
      fileName: req.file.originalname,
      paperSize: req.body.paperSize,
      printType: req.body.printType,
      colorOption: req.body.colorOption,
      pageCount: parseInt(req.body.pageCount),
      totalCost: parseFloat(req.body.totalCost),
      status: 'Pending'
    });

    await newOrder.save();
    res.status(200).json({ message: 'Order submitted successfully.' });
  } catch (err) {
    console.error("Error submitting order:", err);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// ------------------ Get Active Orders ----------------
app.get('/orders', async (req, res) => {
  try {
    const orders = await OrderModel.find({ status: 'Pending' });
    res.json(orders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// ------------------ Complete Order -------------------
app.post('/complete-order/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await OrderModel.findByIdAndUpdate(id, { status: 'Completed' });
    res.json({ message: 'Order marked as completed.' });
  } catch (err) {
    console.error("Error completing order:", err);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// ------------------ Student Registration -------------
app.post('/register', (req, res) => {
  StudentModel.create(req.body)
    .then(result => res.json(result))
    .catch(err => {
      console.error("Error during registration:", err);
      res.status(500).json({ message: 'Registration failed.' });
    });
});

// ------------------ Login ----------------------------
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  StudentModel.findOne({ email: email })
    .then(ans => {
      if (ans) {
        if (ans.password === password) {
          res.json("success");
        } else {
          res.json("the password is incorrect");
        }
      } else {
        res.json("No record existed");
      }
    })
    .catch(err => {
      console.error("Login error:", err);
      res.status(500).json({ message: 'Login failed.' });
    });
});

// ------------------ Default Route ---------------------
app.get('/', (req, res) => {
  res.send("hello how are");
});
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

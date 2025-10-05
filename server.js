const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./src/config/db'); // CommonJS export
const productRoutes = require('./src/routes/productRoutes'); // CommonJS export

// Connect to MongoDB
connectDB();

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to Inventory Management System');
});
app.use('/products', productRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const db = require('./config/db'); // SQLite connection
// const connectDB = require('./config/db'); // MongoDB connection

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Import Routes
const transactionRoutes = require('./routes/transactions');

// Routes Middleware
app.use('/api', transactionRoutes);

// Initialize SQLite DB
db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS transactions (id INTEGER PRIMARY KEY AUTOINCREMENT, type TEXT, category TEXT, amount REAL, date TEXT, description TEXT)');
});

// MongoDB Connection
// connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

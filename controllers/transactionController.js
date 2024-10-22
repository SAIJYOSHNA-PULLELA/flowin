const db = require('../config/db'); // For SQLite

// Add a new transaction
const addTransaction = (req, res) => {
    const { type, category, amount, date, description } = req.body;

    // Validate input
    if (!type || !category || typeof amount !== 'number' || !date) {
        return res.status(400).json({ message: 'Invalid input data' });
    }

    const sql = `INSERT INTO transactions (type, category, amount, date, description) VALUES (?, ?, ?, ?, ?)`;
    db.run(sql, [type, category, amount, date, description], function(err) {
        if (err) {
            return res.status(400).json({ message: err.message });
        }
        res.status(201).json({ id: this.lastID, type, category, amount, date, description });
    });
};

// Get all transactions
const getTransactions = (req, res) => {
    const sql = 'SELECT * FROM transactions';
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
};

// Export the functions
module.exports = {
    addTransaction,
    getTransactions
};

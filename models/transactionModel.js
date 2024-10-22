const db = require('../config/db');

const createTransactionTable = () => {
    const sql = `
    CREATE TABLE IF NOT EXISTS transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        type TEXT NOT NULL,
        category TEXT NOT NULL,
        amount REAL NOT NULL,
        date TEXT NOT NULL,
        description TEXT
    )`;
    return db.run(sql);
};

module.exports = {
    createTransactionTable
};

const express = require('express');
const router = express.Router();

// Connect to mysql database

router.get('/users', (req,res) => {
    res.json(['hello', 'world']);
});

module.exports = router;
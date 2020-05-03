const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
    console.log("request fromo users");

    res.json({
        message: 'this is my server '
    });
});

module.exports = router;

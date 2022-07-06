const express = require('express');
const router = express.Router();

// TODO: 다크모드 API

// TODO: 글자크기 API
router.post('/text', (req, res) => {
    const { textSize } = req.body;
    res.json({
        style: `html { font-size: ${parseInt(textSize)+50}%; }`
    })
});

module.exports = router;

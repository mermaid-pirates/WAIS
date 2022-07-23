const express = require('express');
const axios = require('axios');
const modifyLink = require('../services/modifyLink');
const router = express.Router();

router.get('/', async (req, res) => {
    const url = req.query.url;
    if (!url) res.render('help');
    delete req.headers.host;
    try {
        const result = await axios.get(url, {
            headers: {...req.headers}
        });
        const html = result.data;
        const modify_html = modifyLink(url, html);
        res.end(modify_html);
    } catch (e) {
        console.error(e);
    }
});

module.exports = router;

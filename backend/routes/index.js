const axios = require('axios');
var urlencode = require('urlencode'); 
const express = require('express');
const isUrl = require('../services/isUrl');
const router = express.Router();

const modifyLink = require('../services/modifyLink');

router.get('/', async (req, res, next) => {
    const url = urlencode.decode(req.query.url);
    if (!url) return res.status(400).end('URL을 파라미터에 포함해야 합니다.');
    if (!isUrl(url)) return res.status(400).end('잘못된 형식의 URL입니다.');

    delete req.headers.host;
    delete req.headers.origin;
    const result = await axios.get(url, {
        headers: {
            'user-agent': req.headers['user-agent'],
            'accept': '*/*',
            'content-type': 'application/json',
        }
    });
    const html = result.data;
    if (!html) return res.status(404).send('HTML을 받아오지 못했습니다.');

    const modified_html = modifyLink(url, html);
    return res.send(modified_html);
});

module.exports = router;

const axios = require('axios');
var urlencode = require('urlencode'); 
const express = require('express');
const isUrl = require('../services/isUrl');
const router = express.Router();

const modifyLink = require('../services/modifyLink');

router.get('/', async (req, res) => {
    try {
        const url = urlencode.decode(req.query.url);
        if (!url) return res.status(400).end('URL을 파라미터에 포함해야 합니다.');
        if (!isUrl(url)) return res.status(400).end('잘못된 형식의 URL입니다.');
        const result = await axios.get(url, {
            headers: {
                connection: 'keep-alive',
                'user-agent': req.headers['user-agent'],
                'accept': '*/*',
                'Content-Type': 'application/json; charset=utf-8'
            }
        });
        const html = result.data;
        if (!html) return res.status(404).end('HTML을 받아오지 못했습니다.');
    
        const modified_html = modifyLink(url, html);
        return res.end(modified_html);
    } catch (e) {
        return res.status(500).end('알 수 없는 오류가 발생했습니다.');
    }
});

module.exports = router;

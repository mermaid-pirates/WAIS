const express = require('express');
const router = express.Router();
const dark = require('../services/dark');

// TODO: 다크모드 API

// 테스트용 페이지
router.get('/dark', (req, res) => {
    res.writeHead('200', { 'Content-Type': 'text/html; charset=utf8' });
    var context = {};
    req.app.render('style-test', context, function (err, html) {
        console.log('rendered : ' + html);
        res.end(html);
    });
});

router.post('/dark', (req, res) => {
    var style_sheet = dark.getDarkModeStyle();
    res.writeHead('200', { 'Content-Type': 'text/html; charset=utf8' });
    var context = {result:style_sheet};
    req.app.render('style-test', context, function (err, html) {
        res.end(html);
    })
});

// TODO: 글자크기 API

module.exports = router;

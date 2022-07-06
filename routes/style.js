const express = require('express');
const router = express.Router();
const dark = require('../services/dark');

// TODO: 다크모드 API

// 테스트용 페이지
router.get('/color', (req, res) => {
    res.writeHead('200', { 'Content-Type': 'text/html; charset=utf8' });
    var context = {};
    req.app.render('style-test', context, function (err, html) {
        console.log('rendered : ' + html);
        res.end(html);
    });
});

router.post('/color', (req, res) => {
    var style = '';
    var selected_style = req.body.style_change;
    if(selected_style === 'dark') style += dark.getStyle();
    var context = {result:style}
    res.writeHead('200', { 'Content-Type': 'text/html; charset=utf8' });
    // pug의 #{result}에 스타일 시트 내용 삽입
    req.app.render('style-test', context, function (err, html) { 
        res.end(html);
    })
});

// TODO: 글자크기 API

module.exports = router;

const express = require('express');
const router = express.Router();
const fs = require('fs');
const dark = require('../services/dark');
const weak = require('../services/colorWeakness');
const cont = require('../services/highContrast');
const CSSadder = require('../services/addStyleSheet');
const example_html_data = fs.readFileSync('data/sampleHTML', 'utf8');

// TODO: 색상 변경 모드 API

// 테스트용 페이지
router.get('/color-test', (req, res) => {
    res.writeHead('200', { 'Content-Type': 'text/html; charset=utf8' });
    req.app.render('color-test', function (err, html) {
        res.end(html);
    });
});

router.post('/color', (req, res) => {
    const style_name = req.body.style_change;
    let html_data = req.body.html_data || example_html_data;
    let style = '';
    switch(style_name) {
        case 'original':
            break;
        case 'dark':
            style = dark.getStyle();
            break;
        case 'color_weakness':
            style = weak.getStyle();
            html_data = weak.getRenderedHtml(html_data);
            break;
        case 'high_contrast':
            style = cont.getStyle();
            break;
    }            
    const result = CSSadder.setStyle(html_data, style, style_name);            
    res.writeHead('200', { 'Content-Type': 'text/html; charset=utf8' });
    res.end(result);
});

// TODO: 글자크기 API
router.post('/text', (req, res) => {
    const { textSize } = req.body;
    res.json({
        style: `html { font-size: ${parseInt(textSize)+50}%; }`
    })
});

module.exports = router;

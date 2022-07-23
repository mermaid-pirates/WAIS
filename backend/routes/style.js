const express = require('express');
const router = express.Router();
const fs = require('fs');
const dark = require('../services/colorDark');
const weak = require('../services/colorWeakness');
const cont = require('../services/colorHighContrast');
const css_manager = require('../services/manageStyleSheet');
const example_html_data = fs.readFileSync('data/sampleHTML', 'utf8');
const no_url_html_data = fs.readFileSync('data/noUrlHTML', 'utf-8');
const internal_selector = '#body';

// 색상 변경 모드 API

// 테스트용 페이지
router.get('/color-test', (req, res) => {
    res.writeHead('200', { 'Content-Type': 'text/html; charset=utf8' });
    req.app.render('color-test', function (err, html) {
        res.end(html);
    });
});

router.post('/color', (req, res) => {
    const style_category = 'color';
    const url = req.body.url;
    const style_name = req.body.style_change;
    let html_data = req.body.html_data || no_url_html_data;
    let style = null;
    let color_mode = null;
    if(style_name == 'original' && url != undefined) { res.redirect('/?url='+url); }
    switch(style_name) {
        case 'dark':            color_mode = dark; break;
        case 'color_weakness':  color_mode = weak; break;
        case 'high_contrast':   color_mode = cont; break;
    }
    html_data = css_manager.delStyle(html_data, style_category);
    html_data = color_mode.getRenderedHtml(html_data);
    style = css_manager.makeStyle(internal_selector, color_mode.setting, color_mode.strict_mode)
    const result = css_manager.addStyle(html_data, style, style_category+' '+style_name);
    res.writeHead('200', { 'Content-Type': 'text/html; charset=utf8' });
    res.end(result);
});

// 글자크기 API
router.post('/text', (req, res) => {
    const style_category = 'text';
    const style_name = req.body.style_change;
    const text_size = req.body.text_size;
    const html_data = css_manager.delStyle(req.body.html_data, style_category) || example_html_data;
    const style = `${internal_selector} { font-size: ${parseInt(text_size)}% !important; }`;
    const result = css_manager.addStyle(html_data, style, style_category+' '+style_name);
    res.writeHead('200', { 'Content-Type': 'text/html; charset=utf8' });
    res.end(result);
});

module.exports = router;

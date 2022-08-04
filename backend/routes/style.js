const express = require('express');
const router = express.Router();
const fs = require('fs');
const common = require('../data/common');
const example_html_data = fs.readFileSync('data/sampleHTML', 'utf8');
const no_url_html_data = fs.readFileSync('data/noUrlHTML', 'utf-8');
const INTERNAL_SELECTOR = '#body';
const css_manager = require('../services/manageStyleSheet');
const color_style = new Map([
    ['dark', require('../services/colorDark')], 
    ['color_weakness' , require('../services/colorWeakness')],
    ['high_contrast' , require('../services/colorHighContrast')]
])

// 색상 변경 모드 API

// 테스트용 페이지
router.get('/color-test', (req, res) => {
    res.writeHead('200', { 'Content-Type': 'text/html; charset=utf8' });
    req.app.render('color-test', function (err, html) {
        return res.end(html);
    });
});

router.post('/color', (req, res) => {
    const style_category = 'color';
    const url = req.body.url;
    const style_name = req.body.style_change;
    let html_data = common.cached_result.get(url) || no_url_html_data;
    if(style_name == 'original') { res.end(html_data); }
    const applied_style = common.applied_style;

    const color_mode = color_style.get(style_name);
    html_data = color_mode.getRenderedHtml(html_data);

    const style = css_manager.makeStyle(style_category+' '+style_name, INTERNAL_SELECTOR, color_mode.setting, color_mode.strict_mode);
    if(applied_style.has(style_category)) { applied_style.delete(style_category); }
    applied_style.set(style_category, style);

    const result = css_manager.setStyle(html_data);
    res.writeHead('200', { 'Content-Type': 'text/html; charset=utf8' });
    return res.end(result);
});

// 글자크기 API
router.post('/text', (req, res) => {
    const style_category = 'text';
    const url = req.body.url;
    const style_name = req.body.style_change;
    const text_size = req.body.text_size;
    const html_data = common.cached_result.get(url) || no_url_html_data;
    const applied_style = common.applied_style;

    const style = `<style class="wais ${style_category}+' '+${style_name}"> ${INTERNAL_SELECTOR} { font-size: ${parseInt(text_size)}% !important; } </style>`;
    if(applied_style.has(style_category)) { applied_style.delete(style_category); }
    applied_style.set(style_category, style);

    const result = css_manager.setStyle(html_data);
    res.writeHead('200', { 'Content-Type': 'text/html; charset=utf8' });
    return res.end(result);
});

module.exports = router;

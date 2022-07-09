const express = require('express');
const router = express.Router();
const dark = require('../services/dark');
const weak = require('../services/colorWeakness');
const CSSadder = require('../services/addStyleSheet');

const example_html_data = `<html><head>
    <title>Example Domain</title>

    <meta charset="utf-8">
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
    body {
        background-color: #f0f0f2;
        margin: 0;
        padding: 0;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
        
    }
    div {
        width: 600px;
        margin: 5em auto;
        padding: 2em;
        background-color: #fdfdff;
        border-radius: 0.5em;
        box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.02);
    }
    a:link, a:visited {
        color: #38488f;
        text-decoration: none;
    }
    @media (max-width: 700px) {
        div {
            margin: 0 auto;
            width: auto;
        }
    }
    </style>    
<script src="chrome-extension://mooikfkahbdckldjjndioackbalphokd/assets/prompt.js"></script></head>

<body>
<div style="background-color:#123456">
    <h1 style="color:#005caf;">Custom Example Domain</h1>
    <p>This domain is for use in illustrative examples in documents. You may use this
    domain in literature without prior coordination or asking for permission.</p>
    <p><a href="https://www.iana.org/domains/example">More information...</a></p>
</div>
<div style="background-color:#247833;">
    <h1 style="color:#5caf00;">Custom Example Domain</h1>
    <p>This domain is for use in illustrative examples in documents. You may use this
    domain in literature without prior coordination or asking for permission.</p>
    <p><a href="https://www.iana.org/domains/example">More information...</a></p>
</div>

</body></html>`;

// TODO: 색상 변경 모드 API

// 테스트용 페이지
router.get('/color-test', (req, res) => {
    res.writeHead('200', { 'Content-Type': 'text/html; charset=utf8' });
    var context = {};
    req.app.render('color-test', context, function (err, html) {
        console.log('rendered : ' + html);
        res.end(html);
    });
});

router.post('/color', (req, res) => {
    console.log(req.body);
    var style_name = req.body.style_change;
    var html_data = req.body.html_data || example_html_data;
    var style = '';
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
    }            
    var result = CSSadder.setStyle(html_data, style, style_name);            
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

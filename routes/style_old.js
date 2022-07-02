var qs = require('querystring');
var express = require('express');
var fs = require('fs');
var router = express.Router();
const styleSheet = '<style class="gray-background" media="screen">html{background-color: gray;}</style>';

router.get('/', function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.send(styleSheet);
});

function styleSheetList(req_style_list) {
    var style_sheet_list = ''
    for(var req_style of req_style_list) {
        fs.readFile(`data/${req_style}`, 'utf8', function(err, data) {
            //data = data.replace(/(\r\n|\n|\r)/gm, "");
            style_sheet_list += data;
            console.log(data);
        })
    }
    return style_sheet_list;
}

router.post('/', function (req, res, next) {
    var style_list = req.body.style_change;
    if(!Array.isArray(style_list)) style_list = [style_list];
    res.setHeader('Content-Type', 'text/plain');
    res.send(styleSheetList(style_list));
});

module.exports = router;

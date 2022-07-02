var express = require('express');
var fs = require('fs');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.writeHead('200',{'Content-Type':'text/html; charset=utf8'});
    //var context = {};
    fs.readdir('./data', function (error, filelist) {
        var context = {filelist:filelist};
        req.app.render('style-test', context, function (err, html) {
            console.log('rendered : ' + html);
            res.end(html);
        });
    });
    
});

module.exports = router;

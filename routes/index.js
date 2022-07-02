var express = require('express');
var axios = require('axios');
var router = express.Router();

router.get('/', async function(req, res) {
    const url = req.query.url;
    if (!url) res.render('help');
    delete req.headers.host;
    try {
        const result = await axios.get(url, {
            headers: {...req.headers}
        });
        res.send(result.data);
    } catch (e) {
        console.error(e);
    }
});

module.exports = router;

var express = require('express');
var axios = require('axios');
var router = express.Router();


const requestUrl = 'https://example.com';

router.get('/', async function(req, res) {
    delete req.headers.host;
    try {
        const result = await axios.get(requestUrl, {
            headers: {...req.headers}
        });
        res.send(result.data);
    } catch (e) {
        console.error(e);
    }
});

module.exports = router;

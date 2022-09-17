const urlencode = require('urlencode'); 
const express = require('express');
const isUrl = require('../services/isUrl');
const router = express.Router();

const modifyLink = require('../services/modifyLink');

const cached_result = new Map();

router.get('/', (req, res) => {
    try {
        const url = urlencode.decode(req.query.url);
        if (!url) return res.status(400).end('URL을 파라미터에 포함해야 합니다.');
        if (!isUrl(url)) return res.status(400).end('잘못된 형식의 URL입니다.');

        // cache hit
        if (cached_result.has(url)) {
            return res.end(cached_result.get(url));
        }

        // cache miss
        const parsed_host = url.split('/').splice(2).splice(0, 1).join('/');
        let parsed_path = url.replace(parsed_host, '');
        
        let parsed_port;
        let parsed_ssl;
        if (url.startsWith('https://')) {
            parsed_port = 443;
            parsed_ssl = require('https');
            parsed_path = parsed_path.replace('https://', '');
        } else if (url.startsWith('http://')) {
            parsed_port = 80;
            parsed_ssl = require('http');
            parsed_path = parsed_path.replace('http://', '');
        } else {
            return res.status(400).end('잘못된 형식의 URL입니다.');
        }

        const req_options = {
            hostname: parsed_host,
            port: parsed_port,
            path: parsed_path,
            method: req.method,
            headers: {
                'accept-language': 'ko-KR,ko; q=0.9,en-US; q=0.8,en; q=0.7',
                'user-agent': req.headers['user-agent'],
                'accept': '*/*',
            },
        };

        const server_req = parsed_ssl.request(req_options, (server_res) => {
            let html = '';
            server_res.on('data', (response) => {
                html += response;
            });
            server_res.on('end', () => {
                if (server_res.statusCode !== 200) {
                    return res.status(404).end('HTML을 받아오지 못했습니다.');
                }

                // caching
                const modified_html = modifyLink(url, html);
                cached_result.set(url, modified_html);

                return res.end(modified_html);
            });
        });
    
        server_req.end();
    } catch (e) {
        console.error(e);
        return res.status(500).end('알 수 없는 오류가 발생했습니다.');
    }
});

module.exports = router;
